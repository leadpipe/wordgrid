import './events';
import './grid-view';
import './mat-icon';
import './solution-word';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import * as wasm from 'wordgrid-rust';
import {requestPuzzle} from '../puzzle-service';
import {GameRecord, openWordgridDb} from '../game/wordgrid-db';
import {GameState} from '../game/game-state';
import {Path} from '../game/paths';
import {PuzzleId} from '../game/puzzle-id';
import {SharedGameState} from '../game/shared-game-state';
import {makeShareText, makeShareUrl, SHARE_TITLE} from './sharing';
import {
  HISTORY_PADDING_PX,
  ICON_BUTTON_CLASS,
  MAY_SCROLL_CLASS,
} from './styles';
import {Theme} from './types';
import {
  renderCategory,
  renderCount,
  renderCounts,
  renderShortCounts,
  saveGame,
} from './utils';

@customElement('game-summary')
export class GameSummary extends LitElement {
  static override styles = [
    ICON_BUTTON_CLASS,
    MAY_SCROLL_CLASS,
    css`
      :host {
        display: block;
        --left-inset: 0px;
        --names-appear: 0;
        --num-shares: 1;
      }

      a {
        cursor: pointer;
      }

      #share-button {
        position: relative;
        top: 4px;
      }

      grid-view {
        width: 300px;
        height: 300px;
        flex: 0 0 auto;
      }

      #complete {
        display: flex;
        margin-left: calc(-1 * var(--left-inset) + ${HISTORY_PADDING_PX}px);
      }

      #all-words {
        height: 100vh;
        margin: 0 8px;
      }

      @media (min-height: 700px) and (max-width: 550px) {
        #complete {
          flex-direction: column;
        }

        grid-view {
          align-self: center;
        }

        #all-words {
          height: calc(100vh - 300px);
        }
      }

      #all-words > table {
        table-layout: fixed;
        border-collapse: collapse;
        width: calc(6em + var(--num-shares) * 130px);
      }

      .word-column {
        width: 6em;
        position: sticky;
        left: 0;
        background: var(--background);
      }

      .person-column {
        width: 130px;
      }

      .winner {
        text-decoration: green underline;
      }

      th {
        position: sticky;
        top: 0;
        background: var(--background);
        text-align: center;
        height: 24px;
        z-index: 1;
      }

      th.word-column {
        z-index: 2;
      }

      td {
        vertical-align: baseline;
      }

      tr.cat-row > th {
        top: calc(var(--names-appear) * 24px);
      }

      .duplicate {
        text-decoration: red line-through;
      }

      #ongoing {
        column-width: 6em;
        column-fill: auto;
        overflow-wrap: break-word;
        padding-left: 24px;
        text-indent: -8px;
      }

      div.cat {
        font-weight: bold;
        font-style: italic;
        text-indent: -16px;
      }

      #ongoing div {
        line-height: 90%;
        padding: 4px 0;
      }
    `,
  ];

  override render() {
    const {record, game, expanded, offsetLeft, shares} = this;
    if (!record) return '';
    this.style.setProperty('--left-inset', `${offsetLeft}px`);
    const puzzleId = PuzzleId.fromSeed(record.puzzleId);
    const cats = game?.getWordCategories() ?? [];
    return html`
      <div>
        ${puzzleId.spec.name} puzzle #${puzzleId.counter} of
        ${puzzleId.dateString}
      </div>
      ${game
        ? html`
            <div>
              Earned ${renderCount(game.earnedPoints, 'point')} for finding
              ${renderCount(game.numWordsFoundBeforeTimeLimit, 'word')} within
              ${game.puzzleId.spec.timerMinutes} minutes.
            </div>
            <div>
              Found ${renderCounts(game.getWordCounts(), 'word')},
              ${renderCounts(game.getWordPoints(), 'point')}.
            </div>
            <div>
              ${game.isComplete
                ? html`
                    Complete
                    ${shares.length > 1
                      ? html`
                          (${renderCount(shares.length - 1, 'other player')})
                        `
                      : ''}
                    ${expanded
                      ? this.renderShareForm()
                      : html`&mdash; expand to share`}
                  `
                : html`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
                    ${shares.length > 1
                      ? html`
                          (${renderCount(shares.length - 1, 'other player')}
                          &mdash;
                          ${game.timeExpired
                            ? html`quit
                                <a @click=${this.quitGame} title="Quit">
                                  <mat-icon name="stop_circle"></mat-icon>
                                </a>`
                            : 'finish game'}
                          to compare)
                        `
                      : html`&mdash;
                        ${game.timeExpired
                          ? html`quit
                              <a @click=${this.quitGame} title="Quit">
                                <mat-icon name="stop_circle"></mat-icon>
                              </a>`
                          : 'finish game'}
                        to share `}
                  `}
              <a
                @click=${this.toggleExpansion}
                title=${expanded ? 'Collapse' : 'Expand'}
              >
                <mat-icon
                  name="expand_${expanded ? 'less' : 'more'}"
                ></mat-icon>
              </a>
            </div>
            ${expanded
              ? html`
                  ${game.isComplete
                    ? html`
                        <div id="complete">
                          <grid-view
                            theme=${this.theme}
                            padding="10"
                            .isPaused=${false}
                            .puzzleId=${puzzleId}
                            .puzzle=${game.puzzle}
                            .externalPath=${this.shownPath}
                          ></grid-view>
                          <div id="all-words" class="may-scroll">
                            ${this.renderAllWords(game, cats)}
                          </div>
                        </div>
                      `
                    : html`
                        <div id="ongoing">
                          ${cats.map(
                            cat => html`
                              <div class="cat">${renderCategory(cat)}</div>
                              ${[...game.getFoundWords(cat)].sort().map(
                                word => html`
                                  <div>
                                    <solution-word
                                      word=${word}
                                      theme=${this.theme}
                                    >
                                    </solution-word>
                                  </div>
                                `
                              )}
                            `
                          )}
                        </div>
                      `}
                `
              : ''}
          `
        : html` Loading... `}
    `;
  }

  private renderShareForm() {
    return html`<form @submit=${this.shareGame}>
      Share as
      <input
        id="share-as"
        type="text"
        value=${this.shareAs}
        maxlength="50"
        placeholder="Name/nickname"
        @input=${this.handleShareAsUpdated}
      />
      ${this.shareAs
        ? html`<button
              id="share-button"
              type="submit"
              class="icon-button"
              title="Share"
              tabindex="0"
            >
              <mat-icon name="share"></mat-icon>
            </button>
            ${this.shares.length > 1
              ? html`
                  <label>
                    <input
                      type="checkbox"
                      ?checked=${this.shareBack}
                      @change=${this.handleShareBackChanged}
                    />
                    Share back
                  </label>
                `
              : ''}
            <input
              id="share-text-input"
              type="text"
              readonly
              value=${this.shareClipboardText}
              style="display: ${this.copyToClipboardFailed
                ? 'inline-block'
                : 'none'}"
            />
            ${this.shareClipboardText
              ? this.copyToClipboardFailed
                ? `Copy to clipboard to share`
                : `— Copied to clipboard`
              : ''}`
        : ''}
    </form>`;
  }

  private renderAllWords(game: GameState, cats: readonly wasm.WordCategory[]) {
    const {shares, uniqueWords} = this;
    const maxScore = Math.max(...shares.map(share => share.result.kept.points));
    this.style.setProperty('--names-appear', `${shares.length > 1 ? 1 : 0}`);
    this.style.setProperty('--num-shares', `${shares.length}`);
    return html`
      <table>
        <colgroup>
          <col class="word-column" />
          <col class="person-column" span=${shares.length} />
        </colgroup>
        ${shares.length > 1
          ? html`
              <tr class="names-row">
                <th class="word-column"></th>
                ${shares.map(
                  share =>
                    html`<th
                      title=${share.person}
                      class=${share.result.kept.points === maxScore
                        ? 'winner'
                        : ''}
                    >
                      ${share.person}
                    </th>`
                )}
              </tr>
              <tr>
                <td class="word-column"></td>
                ${shares.map(share => {
                  const {result} = share;
                  return html`<td>
                    Kept ${renderCount(result.kept.points, 'point')}, lost
                    ${result.lost.points}.
                  </td>`;
                })}
              </tr>
            `
          : ''}
        ${cats.map(cat => {
          return html`
            <tr class="cat-row">
              <th class="word-column">${renderCategory(cat)}</th>
              ${shares.map(
                share => html`
                  <th>${renderShortCounts(share.getWordCounts(cat))} words</th>
                `
              )}
            </tr>
            ${game.getWords(cat).map(
              word => html`
                <tr>
                  <td class="word-column">
                    <solution-word
                      word=${word}
                      theme=${this.theme}
                      @word-expanded=${this.showWord}
                    ></solution-word>
                  </td>
                  ${shares.map(
                    share => html`
                      <td>
                        ${share.before.has(word)
                          ? html`
                              <mat-icon name="check_circle_outline"></mat-icon>
                              ${uniqueWords.has(word)
                                ? html`<span class="unique"
                                    >+${GameState.scoreWord(word)}</span
                                  >`
                                : html`<span class="duplicate">+0</span>`}
                            `
                          : share.after.has(word)
                          ? html` <mat-icon name="check"></mat-icon> `
                          : ''}
                      </td>
                    `
                  )}
                </tr>
              `
            )}
          `;
        })}
      </table>
    `;
  }

  @property({reflect: true}) theme: Theme = 'light';
  @property({type: Boolean, reflect: true}) expanded = false;
  @property() record: GameRecord | null = null;

  @state() game: GameState | null = null;
  shares: SharedGameState[] = [];
  uniqueWords: ReadonlySet<string> = new Set();
  @state() shareAs = '';
  @state() shareClipboardText = '';
  @state() copyToClipboardFailed = false;
  @state() shareBack = false;
  @query('#share-text-input') shareTextInput: HTMLInputElement | undefined;

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('record')) {
      this.loadGame();
    }
  }

  private readonly db = openWordgridDb();

  private prevShownWord = '';
  private shownWordCount = 0;
  @state() private shownPath: Path = {locs: []};
  private showWord(event: CustomEvent<string>) {
    const {game} = this;
    if (!game) return;
    const word = event.detail;
    if (word) {
      if (word === this.prevShownWord) {
        ++this.shownWordCount;
      } else {
        this.shownWordCount = 0;
        this.prevShownWord = word;
      }
      const paths = game.findPaths(word);
      this.shownPath = paths[this.shownWordCount % paths.length];
    } else {
      this.shownPath = {locs: []};
    }
  }

  private async loadGame() {
    const {record} = this;
    if (!record) return;
    const puzzle = await requestPuzzle(PuzzleId.fromSeed(record.puzzleId));
    const game = GameState.fromDbRecord(record, puzzle);

    const db = await this.db;
    const ix = db.transaction('shares').store.index('by-puzzle-id');
    const shares = [game.asSharedGameState('You')];
    const uniqueWords = new Set(shares[0].before);
    const duplicateWords = new Set<string>();
    for await (const cursor of ix.iterate(record.puzzleId)) {
      const share = game.toSharedGameState(cursor.value);
      shares.push(share);
      for (const word of share.before) {
        if (uniqueWords.has(word)) {
          uniqueWords.delete(word);
          duplicateWords.add(word);
        } else if (!duplicateWords.has(word)) {
          uniqueWords.add(word);
        }
      }
    }

    for (const share of shares) {
      share.setUniqueWords(uniqueWords);
    }
    this.shares = shares;
    this.uniqueWords = uniqueWords;
    this.shareBack = shares.length > 1;
    this.game = game;
  }

  private handleShareAsUpdated(event: InputEvent) {
    this.shareAs = (event.target as HTMLInputElement).value;
    this.shareClipboardText = '';
    this.copyToClipboardFailed = false;
  }

  private handleShareBackChanged(event: InputEvent) {
    this.shareBack = (event.target as HTMLInputElement).checked;
  }

  private async shareGame(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.shareClipboardText = '';
    this.copyToClipboardFailed = false;
    const {game, shareAs, shares, shareBack} = this;
    if (game) {
      const url = makeShareUrl(game, shareAs);
      if (!url) return;

      const title = SHARE_TITLE;
      const text = makeShareText(game, shareAs, shares, shareBack);

      let shared = false;
      if ('share' in navigator) {
        try {
          await navigator.share({title, text, url});
          shared = true;
        } catch (e: unknown) {
          console.log('Unable to share', e);
        }
      }

      let copied = false;
      if (!shared) {
        this.shareClipboardText = `${text}  ${url}`;
        try {
          await navigator.clipboard.writeText(this.shareClipboardText);
          copied = true;
        } catch (e: unknown) {
          console.log('Unable to write text to clipboard', e);
        }
      }

      this.copyToClipboardFailed = !shared && !copied;
      if (this.copyToClipboardFailed) {
        await 0; // Wait for the next microtask
        if (this.shareTextInput) {
          this.shareTextInput.select();
        }
      }
    }
  }

  private resumeGame() {
    if (this.game) {
      this.dispatchEvent(
        new CustomEvent('play-puzzle', {
          detail: {puzzleId: this.game.puzzleId, resume: true},
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private async quitGame() {
    if (this.game) {
      this.game.markComplete();
      await saveGame(await this.db, this.game);
      this.dispatchEvent(
        new CustomEvent('show-history', {
          detail: this.game.puzzleId,
          bubbles: true,
          composed: true,
        })
      );
      this.requestUpdate();
    }
  }

  private toggleExpansion() {
    const target = this.expanded ? undefined : this.game?.puzzleId;
    this.dispatchEvent(
      new CustomEvent('show-history', {
        detail: target,
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'game-summary': GameSummary;
  }
}
