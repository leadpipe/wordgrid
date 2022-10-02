import './events';
import './grid-view';
import './mat-icon';
import './solution-word';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import * as wasm from 'wordgrid-rust';
import {requestPuzzle} from '../puzzle-service';
import {GameRecord, isWordsComplete} from '../game/wordgrid-db';
import {GameState} from '../game/game-state';
import {Path} from '../game/paths';
import {PuzzleId} from '../game/puzzle-id';
import {Theme} from './types';
import {
  renderCategory,
  renderCount,
  renderCounts,
  renderShortCounts,
} from './utils';
import {MAY_SCROLL_CLASS} from './styles';

@customElement('game-summary')
export class GameSummary extends LitElement {
  static override styles = [
    MAY_SCROLL_CLASS,
    css`
      :host {
        display: block;
      }

      a {
        cursor: pointer;
      }

      grid-view {
        width: 300px;
        height: 300px;
      }

      #complete {
        display: flex;
      }

      #all-words {
        height: 300px;
        margin: 0 8px;
      }

      th {
        position: sticky;
        top: 0;
        background: var(--background);
        text-align: center;
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
    const {record, game, expanded} = this;
    if (!record) return '';
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
                    ${expanded
                      ? html`<div>
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
                            ? html`<a @click=${this.shareGame} title="Share">
                                  <mat-icon name="share"></mat-icon>
                                </a>
                                <input id="share-as-url" readonly /> `
                            : ''}
                        </div>`
                      : ''}
                  `
                : html`
                    Ongoing
                    <a @click=${this.resumeGame} title="Resume play">
                      <mat-icon name="play_circle"></mat-icon>
                    </a>
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
                            <table>
                              ${cats.map(cat => {
                                const words = game.getWordCounts(cat);
                                const [before, after] =
                                  game.getFoundWordsSets();
                                return html`
                                  <tr>
                                    <th>${renderCategory(cat)}</th>
                                    <th>${renderShortCounts(words)} words</th>
                                  </tr>
                                  ${game.getWords(cat).map(
                                    word => html`
                                      <tr>
                                        <td>
                                          <solution-word
                                            word=${word}
                                            theme=${this.theme}
                                            @word-expanded=${this.showWord}
                                          ></solution-word>
                                        </td>
                                        <td>
                                          ${before.has(word)
                                            ? html`
                                                <mat-icon
                                                  name="check_circle_outline"
                                                ></mat-icon>
                                                +${GameState.scoreWord(word)}
                                              `
                                            : after.has(word)
                                            ? html`
                                                <mat-icon
                                                  name="check"
                                                ></mat-icon>
                                              `
                                            : ''}
                                        </td>
                                      </tr>
                                    `
                                  )}
                                `;
                              })}
                            </table>
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

  @property({reflect: true}) theme: Theme = 'light';
  @property({type: Boolean, reflect: true}) expanded = false;
  @property() record: GameRecord | null = null;

  @state() game: GameState | null = null;
  @state() shareAs = '';

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('record')) {
      this.loadGame();
    }
  }

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
    this.game = GameState.fromDbRecord(record, puzzle);
  }

  private handleShareAsUpdated(event: InputEvent) {
    this.shareAs = (event.target as HTMLInputElement).value;
  }

  private shareGame() {
    const urlElement = this.shadowRoot?.querySelector(
      '#share-as-url'
    ) as HTMLInputElement | null;
    const {game, shareAs} = this;
    if (urlElement && game) {
      const {wordsToStore} = game;
      if (!isWordsComplete(wordsToStore)) return;
      const random = new wasm.JsRandom(`${game.puzzleId.seed}:${shareAs}`);
      const firstBits = wasm.obfuscate(wordsToStore.firstBits, random);
      let url = `${location.origin}${location.pathname}#share/${
        game.puzzleId.seed
      }/${encodeURIComponent(shareAs)}/${firstBits}`;
      if (wordsToStore.secondBits) {
        url += `/${wasm.obfuscate(wordsToStore.secondBits, random)}`;
      }
      urlElement.value = url;
      urlElement.select();
      random.free();
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
