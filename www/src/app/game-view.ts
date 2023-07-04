import './events';
import './game-timer';
import './mat-icon';
import './meta-panel';
import './solution-word';
import './grid-view';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {EventType, logEvent} from '../analytics';
import {requestPuzzle} from '../puzzle-service';
import {GridResultMessage} from '../worker/worker-types';
import {GameState} from '../game/game-state';
import {PuzzleId, toIsoDateString} from '../game/puzzle-id';
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
import {renderCount, renderCounts, saveGame, sleepMs} from './utils';

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
        --grid-spec-size: 6;
        --grid-optimal-cell-side-extent: 80px;
        --below-grid-height: 80px;
        --grid-optimal-width: calc(
          var(--grid-spec-size) * var(--grid-optimal-cell-side-extent) + 40px
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
        flex: 2 1 0;
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

      @media (max-width: 800px) {
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
        <div><meta-panel></meta-panel></div>
      </div>
      <div id="summary">
        ${gameState
          ? html`
              <div>
                <b>${gameState.puzzleId.spec.minLength}</b> or more letters per
                word.
                <br class="opt-break" />
                ${getShowTimer()
                  ? html`
                      Earned ${renderCount(gameState.earnedPoints, 'point')}.
                    `
                  : ''}
              </div>
              <div>
                ${renderCounts(gameState.getWordCounts(), 'word')},
                <br />
                ${renderCounts(gameState?.getWordPoints(), 'point')}.
              </div>
            `
          : ''}
      </div>
      <div id="grid">
        <grid-view
          theme=${theme}
          isInteractive
          .isPaused=${gameState?.isPaused ?? true}
          .puzzleId=${this.puzzleId}
          .puzzle=${this.puzzle}
          @words-traced=${this.wordsTraced}
          @words-selected=${this.wordsSelected}
        ></grid-view>
        <div id="below-grid">
          ${this.loadingWords
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
                theme=${this.theme}
                .category=${this.puzzle!.words.get(word) ?? null}
              ></solution-word>
            </div>
          `
        )}
      </div>
    `;
  }

  @property({reflect: true}) theme: Theme = 'light';
  @property({attribute: false}) puzzleId: PuzzleId = PuzzleId.daily();
  @property({type: Boolean}) resumeImmediately = false;
  @property({type: Boolean}) loadingWords = true;
  @query('#found') found?: HTMLElement;

  @state() private puzzle: GridResultMessage | null = null;
  private gameState: GameState | null = null;
  private readonly db = openWordgridDb();

  private readonly foregroundnessHandler = () => {
    if (document.visibilityState !== 'visible') {
      this.pausePlay('foregroundness');
    }
  };

  private readonly windowBlurHandler = () => {
    this.pausePlay('window blur');
  };

  private lastInteraction = new Date();
  private noteInteraction() {
    this.lastInteraction = new Date();
  }

  private readonly spacebarHandler = (event: KeyboardEvent) => {
    this.noteInteraction();
    if (event.key === ' ') {
      if (this.gameState?.isPaused) {
        this.resumePlay();
      } else {
        this.pausePlay('spacebar');
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
    if (this.puzzleId.seed !== puzzleId.seed) {
      // We've been superseded
      return;
    }
    // If there are too few words in this grid, move on to the next puzzle.
    if (puzzle.words.size < 50) {
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
      this.loadPuzzle(puzzle, puzzleId);
    }
  }

  private async loadPuzzle(puzzle: GridResultMessage, puzzleId: PuzzleId) {
    const db = await this.db;
    const record = await db.get('games', puzzle.message.seed);
    if (record) {
      this.gameState = GameState.fromDbRecord(record, puzzle);
    } else {
      this.gameState = new GameState(puzzleId, puzzle);
    }
    this.puzzle = puzzle;
    if (this.gameState.isComplete) {
      this.redirectToHistory();
    } else if (this.resumeImmediately) {
      this.gameState.resume();
    }
  }

  /** Saves the game state to the database, if it has been started. */
  private async saveGame() {
    const {gameState} = this;
    if (!gameState || !gameState.lastPlayed) return;
    await saveGame(await this.db, gameState);
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
    logEvent(EventType.ACTION, {category: 'go to history'});
  }

  private resumePlay() {
    this.gameState?.resume();
    this.requestUpdate();
    logEvent(EventType.ACTION, {category: 'resume'});
  }

  private async pausePlayAsync(timestamp?: number) {
    this.gameState?.pause(timestamp);
    this.requestUpdate();
    await this.saveGame();
    logEvent(EventType.ACTION, {category: 'pause'});
  }

  pausePlay(why: string) {
    const now = new Date();
    const today = toIsoDateString(now);
    const activeDate = toIsoDateString(this.lastInteraction);
    let timestamp = now.getTime();
    if (today !== activeDate) {
      // All of this date-checking is another attempt to squash the bug where
      // leaving yesterday's puzzle going brings that puzzle back today instead
      // of going to today's daily puzzle.
      timestamp = this.lastInteraction.getTime();
      logEvent(EventType.ACTION, {category: 'pause-next-day', detail: why});
    }
    this.pausePlayAsync(timestamp);
  }

  private async quit() {
    this.gameState?.markComplete();
    await this.saveGame();
    this.redirectToHistory();
    logEvent(EventType.ACTION, {category: 'quit'});
  }

  private rotatePuzzle(_event: Event) {
    this.noteInteraction();
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
      logEvent(EventType.ACTION, {category: 'rotate'});
    }
  }

  private flipPuzzle(_event: Event) {
    this.noteInteraction();
    const {puzzle} = this;
    if (puzzle) {
      const grid = puzzle.grid.map(row => row.split('').reverse().join(''));
      this.puzzle = {
        ...puzzle,
        grid,
      };
      logEvent(EventType.ACTION, {category: 'flip'});
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
    this.noteInteraction();
    this.pendingWords = event.detail.words;
    this.pendingWordsJudgements = event.detail.words.map(
      word =>
        this.gameState?.judgeWord(word, event.detail.checkPossible) ??
        WordJudgement.NOT_A_WORD
    );
    this.clearPendingWordsTimeout();
  }

  private wordsSelected(event: CustomEvent<InputWords>) {
    this.noteInteraction();
    this.pendingWords = event.detail.words;
    this.pendingWordsJudgements = event.detail.words.map(
      word =>
        this.gameState?.addFoundWord(word, event.detail.checkPossible) ??
        WordJudgement.NOT_A_WORD
    );
    this.clearPendingWordsTimeout();
    if (this.pendingWordsJudgements.some(j => j === WordJudgement.WORD)) {
      this.found?.scrollTo({left: 0, behavior: 'smooth'});
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
        detail: {puzzleId: this.puzzleId},
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
