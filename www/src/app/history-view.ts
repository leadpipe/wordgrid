import './game-summary';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {PuzzleId} from '../game/puzzle-id';
import {GameRecord, openWordgridDb} from '../game/wordgrid-db';
import {GameSummary} from './game-summary';
import {HISTORY_PADDING_PX, MAY_SCROLL_CLASS} from './styles';
import {Theme} from './types';
import {noteUsage} from './usage';

/**
 * Shows the history of games played, and may expand one game to show its
 * results.  The one expanded game will also show the words found by others, if
 * they have shared them with you.
 */
@customElement('history-view')
class HistoryView extends LitElement {
  static override styles = [
    MAY_SCROLL_CLASS,
    css`
      :host {
        display: block;
        padding: ${HISTORY_PADDING_PX}px;
        height: 100%;
      }

      meta-panel {
        float: right;
      }

      .date {
        margin: 8px 0;
        font-size: 24px;
        font-weight: bold;
      }

      li {
        margin: 16px 0;
      }
    `,
  ];

  protected override render() {
    const {gameRecordsByDate, expandedPuzzle, selectShareAs} = this;
    if (!gameRecordsByDate) return 'Loading games...';
    return html` <meta-panel></meta-panel>
      ${[...gameRecordsByDate.entries()].map(
        ([date, records]) => html`
          <div>
            <span class="date">${date}</span>
            <ul>
              ${records.map(
                record => html`
                  <li id=${record.puzzleId}>
                    <game-summary
                      theme=${this.theme}
                      .expanded=${expandedPuzzle === record.puzzleId}
                      .selectShareAs=${selectShareAs}
                      .record=${record}
                      @game-loaded=${this.handleGameLoaded}
                    ></game-summary>
                  </li>
                `
              )}
            </ul>
          </div>
        `
      )}`;
  }

  @property({reflect: true}) theme: Theme = 'light';

  // The puzzle that's expanded, if there is one.
  @property() expandedPuzzle: string = '';

  /** Whether to select the "share as" input in the expanded summary. */
  @property({type: Boolean}) selectShareAs = false;

  // The games to display.
  @state() private gameRecordsByDate: ReadonlyMap<string, GameRecord[]> | null =
    null;

  private readonly db = openWordgridDb();

  override connectedCallback(): void {
    super.connectedCallback();
    this.loadGames();
  }

  override disconnectedCallback(): void {
    this.gameRecordsByDate = null;
    super.disconnectedCallback();
  }

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('expandedPuzzle')) {
      this.scrollToExpandedSummary();
    }
  }

  private async scrollToExpandedSummary() {
    await 0;
    const skipScroll = !this.gameRecordsByDate || !this.expandedPuzzle;
    const atTop =
      this.gameRecordsByDate?.values().next()?.value?.[0].puzzleId ===
      this.expandedPuzzle;
    const item = this.shadowRoot?.querySelector('game-summary[expanded]');
    const complete =
      item instanceof GameSummary ? item.completeBlock : undefined;
    if (complete) {
      complete.scrollIntoView({behavior: 'smooth'});
    } else if (item && !atTop) {
      item.scrollIntoView({behavior: 'smooth'});
    } else if (!skipScroll) {
      this.scrollTo(0, 0);
    }
  }

  private async loadGames() {
    const db = await this.db;
    const ix = db.transaction('games').store.index('by-last-played');
    const gameRecordsByDate = new Map<string, GameRecord[]>();
    for await (const cursor of ix.iterate(null, 'prev')) {
      const date = cursor.key.toDateString();
      const record = cursor.value;
      const already = gameRecordsByDate.get(date);
      if (already) {
        already.push(record);
      } else {
        gameRecordsByDate.set(date, [record]);
      }
    }
    this.gameRecordsByDate = gameRecordsByDate;
    noteUsage();
  }

  private handleGameLoaded(_event: CustomEvent<PuzzleId>) {
    this.scrollToExpandedSummary();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'history-view': HistoryView;
  }
}
