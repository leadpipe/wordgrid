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
import {renderCount, renderCounts, sleepMs} from './utils';
import {noteUsage} from './usage';

/**
 * Starts true, gets cleared when we've successfully received our first puzzle.
 */
let loadingWords = true;

/**
 * Number of pixels we tell the grid-view to pad itself.
 */
const GRID_VIEW_PADDING = 10;

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
        grid-template-columns: 1fr var(--grid-side-extent) 1fr;
        grid-template-rows: min-content auto;
        gap: var(--page-grid-gap);
        --page-grid-gap: 8px;
        --grid-view-padding: ${GRID_VIEW_PADDING}px;
        --grid-spec-size: 6;
        --grid-optimal-cell-side-extent: 80px;
        --below-grid-height: 80px;
        --grid-optimal-width: calc(
          var(--grid-spec-size) * var(--grid-optimal-cell-side-extent) + 2 *
            var(--grid-view-padding)
        );
        --grid-optimal-height: calc(
          var(--grid-optimal-width) + var(--below-grid-height)
        );
        --base-grid-side-extent: var(--grid-optimal-width);
        --grid-side-extent: min(
          var(--base-grid-side-extent),
          100vh - var(--below-grid-height)
        );
      }

      a {
        text-decoration: none;
        cursor: pointer;
      }

      :host a {
        color: var(--text-color);
      }

      #controls {
        grid-column: 2;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
      }

      #controls > div {
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 4px 16px;
      }

      #controls > div:nth-child(1) {
        justify-content: left;
      }

      #controls > div:nth-child(2) {
        flex: 3 1 0;
      }

      #controls > div:nth-child(3) {
        justify-content: right;
      }

      #summary,
      #found {
        flex: 1 1 50%;
        padding: 24px 16px 0;
      }

      #summary {
        grid-column: 1;
        text-align: right;
      }

      .opt-break {
      }

      #found {
        min-height: 100px;
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
        width: var(--grid-side-extent);
        height: var(--grid-side-extent);
      }

      #grid {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        flex: 0 0 0;
      }

      #below-grid {
        height: var(--below-grid-height);
        width: 100%;
        display: flex;
        align-items: center;
      }

      #below-grid > * {
        text-align: center;
        flex: 3 1 0;
      }

      #below-grid > *:nth-child(odd) {
        flex: 1 1 0;
      }

      @media (max-width: 700px) {
        :host {
          --grid-side-extent: min(
            var(--base-grid-side-extent),
            100vw - 2 * var(--page-grid-gap)
          );
          grid-template-rows: min-content min-content min-content auto;
        }

        #summary,
        #found {
          grid-column: 2;
          padding-top: 0;
        }

        .opt-break {
          display: none;
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
    return html`
      <div id="controls">
        <div>
          <a @click=${this.goToHistory} title="Go to the history page">
            <mat-icon name="arrow_back"></mat-icon>
          </a>
        </div>
        <div>
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
        <div>
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
      </div>
      <div id="summary">
        ${gameState
          ? html`
              <div>
                <b>${gameState.puzzleId.spec.minLength}</b> or more letters.
                <br class="opt-break" />
                ${getShowTimer()
                  ? html`
                      Earned ${renderCount(gameState.earnedPoints, 'point')}.
                    `
                  : ''}
              </div>
              <div>
                ${renderCounts(gameState.getWordCounts(), 'word')},
                <br class="opt-break" />
                ${renderCounts(gameState?.getWordPoints(), 'point')}.
              </div>
            `
          : ''}
      </div>
      <div id="grid">
        <grid-view
          theme=${this.theme}
          padding="${GRID_VIEW_PADDING}"
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
                        ${gameState.isStarted
                          ? html`
                              <a @click=${this.resumePlay} title="Resume play">
                                <mat-icon
                                  name="play_circle"
                                  size="large"
                                ></mat-icon>
                              </a>
                            `
                          : html`
                              <a @click=${this.resumePlay} title="Start play">
                                <mat-icon
                                  name="not_started"
                                  size="large"
                                ></mat-icon>
                              </a>
                            `}
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
    this.style.setProperty('--grid-spec-size', puzzleId.spec.size.toString());
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