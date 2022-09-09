import './events';
import './game-timer';
import './grid-view';
import './mat-icon';
import './solution-word';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {requestPuzzle} from '../puzzle-service';
import {GridResultMessage} from '../worker/worker-types';
import {GameState} from '../game/game-state';
import {PuzzleId} from '../game/puzzle-id';
import {WordJudgement} from '../game/types';
import {openWordgridDb} from '../game/wordgrid-db';
import {InputWords} from './events';
import {
  getCurrentSystemTheme,
  getShowTimer,
  prefsTarget,
  setPreferredTheme,
} from './prefs';
import {MAY_SCROLL_CLASS} from './styles';
import {Theme, ThemeOrAuto} from './types';
import {
  renderCategory,
  renderCount,
  renderCounts,
  renderShortCounts,
  sleepMs,
} from './utils';
import {noteUsage} from './usage';

/**
 * Starts true, gets cleared when we've successfully received our first puzzle.
 */
let loadingWords = true;

/** Encapsulates the entire game page. */
@customElement('game-view')
export class GameView extends LitElement {
  static override styles = [
    MAY_SCROLL_CLASS,
    css`
      :host {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top: 8px;
        display: grid;
        grid-template-columns: 1fr 400px 1fr;
        grid-template-rows: min-content auto;
        gap: 8px;
      }

      a {
        text-decoration: none;
        cursor: pointer;
      }

      :host a {
        color: var(--text-color);
      }

      #left-controls {
        text-align: right;
      }

      #controls {
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 4px 16px;
      }

      #right-controls {
        display: flex;
        justify-content: left;
        align-items: baseline;
        gap: 4px 16px;
      }

      #categories,
      #found {
        flex: 1 1 50%;
        padding: 24px 16px 0;
      }

      #categories {
        text-align: right;
      }

      .cat-header {
        display: flex;
        flex-flow: row wrap;
        column-gap: 8px;
        margin-top: 8px;
        justify-content: flex-end;
      }

      .cat-header .cat {
        text-align: left;
        min-width: 64px;
      }

      .cat-header .counts {
        text-align: right;
        min-width: 64px;
      }

      #found {
        column-width: 6em;
        column-fill: auto;
        overflow-wrap: break-word;
        padding-left: 24px;
        text-indent: -8px;
      }

      #found div {
        line-height: 90%;
        padding: 4px 0;
      }

      grid-view {
        width: 400px;
        height: 400px;
      }

      #grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        flex: 0 0 0;
      }

      #below-grid {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
      }

      #below-grid * {
        text-align: center;
        flex: 3 1 0;
      }

      #below-grid *:nth-child(odd) {
        flex: 1 1 0;
      }

      @media (max-height: 550px) and (min-height: 400px) {
        :host {
          grid-template-columns: 1fr 300px 1fr;
        }

        grid-view {
          width: 300px;
          height: 300px;
        }

        #below-grid {
          height: 64px;
        }
      }

      @media (max-height: 400px) {
        :host {
          grid-template-columns: 1fr 240px 1fr;
        }

        grid-view {
          width: 240px;
          height: 240px;
        }

        #below-grid {
          height: 64px;
        }
      }

      .not-a-word {
      }

      .impossible-word {
        color: orange;
      }

      .too-short-word {
        font-style: italic;
      }

      .duplicate-word {
        color: #777;
      }

      .found-new-word {
        color: green;
      }

      .duplicate-word,
      .found-new-word {
        font-weight: bold;
        font-size: 24px;
      }
    `,
  ];

  override render() {
    const {theme, gameState} = this;
    const newTheme =
      theme === getCurrentSystemTheme()
        ? theme === 'light'
          ? 'dark'
          : 'light'
        : 'auto';
    const cats = gameState?.getWordCategories() ?? [];
    return html`
      <div id="left-controls">
        <a @click=${this.goToHistory} title="Go to the history page">
          <mat-icon name="arrow_back"></mat-icon>
        </a>
      </div>
      <div id="controls">
        <a @click=${this.setTheme} title="Switch to ${newTheme} theme">
          <mat-icon
            name=${newTheme === 'auto' ? 'contrast' : `${newTheme}_mode`}
            data-theme=${newTheme}
          ></mat-icon>
        </a>
        ${gameState && !gameState.isPaused
          ? html`
              <a @click=${this.rotatePuzzle} title="Rotate puzzle">
                <mat-icon name="rotate_90_degrees_cw"></mat-icon>
              </a>
              <a @click=${this.flipPuzzle} title="Flip puzzle">
                <mat-icon name="flip"></mat-icon>
              </a>
            `
          : ''}
      </div>
      <div id="right-controls">
        <a
          href="https://github.com/leadpipe/wordgrid/issues/new"
          target="_blank"
          title="File a bug report"
          ><mat-icon name="bug_report"></mat-icon></a
        ><a
          href="https://github.com/leadpipe/wordgrid/#readme"
          target="_blank"
          title="Help"
          ><mat-icon name="help"></mat-icon
        ></a>
      </div>
      <div id="categories" class="may-scroll">
        ${gameState
          ? html`
              Words have <b>${gameState.puzzleId.spec.minLength}</b> or more
              letters.
              ${getShowTimer()
                ? html`
                    <div>
                      Earned ${renderCount(gameState.earnedPoints, 'point')}.
                    </div>
                  `
                : ''}
              <div>
                Found ${renderCounts(gameState.getWordCounts(), 'word')},<br />
                ${renderCounts(gameState?.getWordPoints(), 'point')}.
              </div>
              <a
                @click=${this.toggleCategories}
                title=${this.categoriesExpanded ? 'Collapse' : 'Expand'}
              >
                <mat-icon
                  name="expand_${this.categoriesExpanded ? 'less' : 'more'}"
                ></mat-icon>
              </a>
            `
          : ''}
        ${this.categoriesExpanded
          ? cats.map(cat => {
              const counts = gameState!.getWordCounts(cat);
              const points = gameState!.getWordPoints(cat);
              return html`
                <section>
                  <div class="cat-header">
                    <span class="cat">${renderCategory(cat)}</span>
                    <span title="Words" class="counts"
                      >${renderShortCounts(counts)}</span
                    >
                    <span title="Points" class="counts"
                      >${renderShortCounts(points)}</span
                    >
                  </div>
                  <div>
                    ${[...this.gameState!.getFoundWords(cat)]
                      .reverse()
                      .map(
                        word => html`
                          <solution-word
                            word=${word}
                            theme=${this.theme}
                          ></solution-word>
                        `
                      )}
                  </div>
                </section>
              `;
            })
          : ''}
      </div>
      <div id="grid">
        <grid-view
          theme=${this.theme}
          padding="10"
          isInteractive
          .isPaused=${gameState?.isPaused ?? true}
          .puzzleId=${this.puzzleId}
          .puzzle=${this.puzzle}
          @words-traced=${this.wordsTraced}
          @words-selected=${this.wordsSelected}
        ></grid-view>
        <div id="below-grid">
          ${loadingWords
            ? html`
                <div></div>
                <div>Loading words...</div>
                <div></div>
              `
            : gameState
            ? html`
                <game-timer
                  .gameState=${gameState}
                  @timer-expired=${this.timerExpired}
                ></game-timer>
                ${this.pendingWords.length
                  ? html`
                      <div>
                        ${this.pendingWords.map(
                          (word, i) =>
                            html`<span
                              class=${this.judgementClass(
                                this.pendingWordsJudgements[i]
                              )}
                            >
                              ${word}
                            </span>`
                        )}
                      </div>
                      <div></div>
                    `
                  : gameState.isPaused
                  ? html`
                      <div>
                        <a @click=${this.resumePlay} title="Resume play">
                          <mat-icon name="play_circle" size="large"></mat-icon>
                        </a>
                      </div>
                      <div>
                        <a @click=${this.quit} title="Quit" class="right">
                          <mat-icon name="stop_circle" size="small"></mat-icon>
                        </a>
                      </div>
                    `
                  : html`
                      <div>
                        <a @click=${this.pausePlay} title="Pause play">
                          <mat-icon name="pause_circle" size="large"></mat-icon>
                        </a>
                      </div>
                      <div></div>
                    `}
              `
            : ''}
        </div>
      </div>
      <div id="found" class="may-scroll">
        ${repeat(
          this.gameState?.getFoundWords() ?? [],
          word => word,
          word => html`
            <div>
              <solution-word
                word=${word}
                .category=${this.puzzle!.words.get(word)!}
                theme=${this.theme}
              ></solution-word>
            </div>
          `
        )}
      </div>
    `;
  }

  @property({reflect: true}) theme: Theme = 'light';
  @property() puzzleId: PuzzleId = PuzzleId.daily();
  @property() resumeImmediately = false;

  @state() private puzzle: GridResultMessage | null = null;
  private gameState: GameState | null = null;
  @state() private categoriesExpanded = false;
  private readonly db = openWordgridDb();

  private readonly foregroundnessHandler = () => {
    if (document.visibilityState !== 'visible') {
      this.pausePlay();
    }
  };

  private readonly windowBlurHandler = () => {
    this.pausePlay();
  };

  private readonly spacebarHandler = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      if (this.gameState?.isPaused) {
        this.resumePlay();
      } else {
        this.pausePlay();
      }
    }
  };

  private readonly showTimerHandler = () => {
    this.requestUpdate();
  };

  override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('visibilitychange', this.foregroundnessHandler);
    window.addEventListener('blur', this.windowBlurHandler);
    window.addEventListener('keydown', this.spacebarHandler);
    prefsTarget.addEventListener('show-timer', this.showTimerHandler);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener(
      'visibilitychange',
      this.foregroundnessHandler
    );
    window.removeEventListener('blur', this.windowBlurHandler);
    window.removeEventListener('keydown', this.spacebarHandler);
    prefsTarget.removeEventListener('show-timer', this.showTimerHandler);
  }

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('puzzleId')) {
      this.requestAndLoadPuzzle();
    }
  }

  private setTheme(event: Event) {
    const theme = (event.target as HTMLElement).dataset.theme;
    setPreferredTheme(theme as ThemeOrAuto);
  }

  private async requestAndLoadPuzzle() {
    const {puzzleId} = this;
    this.puzzle = null;
    this.gameState = null;
    const puzzle = await requestPuzzle(puzzleId);
    // If there are no words in this grid, move on to the next puzzle.
    if (puzzle.words.size === 0) {
      const {resumeImmediately} = this;
      this.dispatchEvent(
        new CustomEvent('play-puzzle', {
          detail: {puzzleId: puzzleId.next(), resumeImmediately},
          bubbles: true,
          composed: true,
        })
      );
    } else {
      // It's a valid puzzle: use it.
      this.loadPuzzle(puzzle);
    }
  }

  private async loadPuzzle(puzzle: GridResultMessage) {
    const db = await this.db;
    const record = await db.get('games', this.puzzleId.seed);
    if (record) {
      this.gameState = GameState.fromDbRecord(record, puzzle);
    } else {
      this.gameState = new GameState(this.puzzleId, puzzle);
    }
    this.categoriesExpanded = false;
    this.puzzle = puzzle;
    loadingWords = false;
    if (this.gameState.isComplete) {
      this.redirectToHistory();
    } else if (this.resumeImmediately) {
      this.gameState.resume();
    }
  }

  /** Saves the game state to the database. */
  private async saveGame() {
    const {gameState} = this;
    if (!gameState) return;
    const {lastPlayed} = gameState;
    if (!lastPlayed) return;
    noteUsage();
    const db = await this.db;
    await db.put('games', {
      puzzleId: gameState.puzzleId.seed,
      lastPlayed,
      elapsedMs: gameState.elapsedMs,
      wordsFound: gameState.wordsToStore,
    });
  }

  private async timerExpired(event: CustomEvent<boolean>) {
    if (!event.detail) return; // Timer wasn't showing
    await this.pausePlayAsync();
    if (
      window.confirm(`Time's up!\n\nKeep looking for words?\n\nCancel to quit.`)
    ) {
      // We need to delay, because the window losing focus makes us pause again.
      await sleepMs(0);
      this.resumePlay();
    } else {
      await this.quit();
    }
  }

  private async goToHistory() {
    await this.saveGame();
    this.redirectToHistory();
  }

  private resumePlay() {
    this.gameState?.resume();
    this.requestUpdate();
  }

  private async pausePlayAsync() {
    this.gameState?.pause();
    this.requestUpdate();
    await this.saveGame();
  }

  private pausePlay() {
    this.pausePlayAsync();
  }

  private async quit() {
    this.gameState?.markComplete();
    await this.saveGame();
    this.redirectToHistory();
  }

  private rotatePuzzle(_event: Event) {
    const {puzzle} = this;
    if (puzzle) {
      const reversedRows = [...puzzle.grid].reverse();
      const grid = [];
      for (let i = 0; i < reversedRows.length; ++i) {
        grid.push(reversedRows.map(row => row.charAt(i)).join(''));
      }
      this.puzzle = {
        ...puzzle,
        grid,
      };
    }
  }

  private flipPuzzle(_event: Event) {
    const {puzzle} = this;
    if (puzzle) {
      const grid = puzzle.grid.map(row => row.split('').reverse().join(''));
      this.puzzle = {
        ...puzzle,
        grid,
      };
    }
  }

  private toggleCategories(_event: Event) {
    this.categoriesExpanded = !this.categoriesExpanded;
  }

  @state() private pendingWords: readonly string[] = [];
  private pendingWordsJudgements: WordJudgement[] = [];
  private pendingWordsTimeoutId = 0;

  private clearPendingWordsTimeout() {
    if (this.pendingWordsTimeoutId) {
      window.clearTimeout(this.pendingWordsTimeoutId);
      this.pendingWordsTimeoutId = 0;
    }
  }

  private wordsTraced(event: CustomEvent<InputWords>) {
    this.pendingWords = event.detail.words;
    this.pendingWordsJudgements = event.detail.words.map(
      word =>
        this.gameState?.judgeWord(word, event.detail.checkPossible) ??
        WordJudgement.NOT_A_WORD
    );
    this.clearPendingWordsTimeout();
  }

  private wordsSelected(event: CustomEvent<InputWords>) {
    this.pendingWords = event.detail.words;
    this.pendingWordsJudgements = event.detail.words.map(
      word =>
        this.gameState?.addFoundWord(word, event.detail.checkPossible) ??
        WordJudgement.NOT_A_WORD
    );
    this.clearPendingWordsTimeout();
    if (this.pendingWordsJudgements.some(j => j === WordJudgement.WORD)) {
      this.saveGame();
      if (this.gameState?.isComplete) {
        this.redirectToHistory();
      }
    }
    this.pendingWordsTimeoutId = window.setTimeout(() => {
      this.pendingWords = [];
    }, 1000);
  }

  private judgementClass(judgement: WordJudgement): string {
    switch (judgement) {
      case WordJudgement.TOO_SHORT:
        return 'too-short-word';
      case WordJudgement.NOT_A_WORD:
      default:
        return 'not-a-word';
      case WordJudgement.DUPLICATE:
        return 'duplicate-word';
      case WordJudgement.WORD:
        return 'found-new-word';
      case WordJudgement.IMPOSSIBLE:
        return 'impossible-word';
    }
  }

  private redirectToHistory() {
    this.dispatchEvent(
      new CustomEvent('show-history', {
        detail: this.puzzleId,
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'game-view': GameView;
  }
}
