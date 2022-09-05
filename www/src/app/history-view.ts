import './game-summary';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {gameSpecByName} from '../game/game-spec';
import {PuzzleId} from '../game/puzzle-id';
import {GameRecord, openWordgridDb} from '../game/wordgrid-db';
import {
  getPreferredTheme,
  getShowTimer,
  setPreferredTheme,
  setShowTimer,
} from './prefs';
import {MAY_SCROLL_CLASS} from './styles';
import {Theme, ThemeOrDefault} from './types';
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
        padding: 8px;
        height: 100%;
      }

      a {
        cursor: pointer;
      }

      :host a {
        color: var(--text-color);
      }

      #actions {
        float: right;
      }

      .date {
        margin: 8px 0;
        font-size: 24px;
        font-weight: bold;
      }

      .selected {
        background: var(--highlight-background);
      }

      li {
        margin: 16px 0;
      }
    `,
  ];

  protected override render() {
    const {gameRecordsByDate, expandedPuzzle} = this;
    if (!gameRecordsByDate) return 'Loading games...';
    return html` <div id="actions">
        <div id="new-puzzle">
          New puzzle: <br />
          ${this.renderNewPuzzleButton('Small')}
          ${this.renderNewPuzzleButton('Medium')}
          ${this.renderNewPuzzleButton('Large')}
        </div>
        <div id="preferred-theme">
          Theme: ${this.renderThemeChoice('Light', 'light_mode')}
          ${this.renderThemeChoice('Dark', 'dark_mode')}
          ${this.renderThemeChoice('Default', 'contrast')}
        </div>
        <div id="preferred-timer">
          Timer: ${this.renderTimerChoice(true, 'visibility')}
          ${this.renderTimerChoice(false, 'visibility_off')}
        </div>
        <div>
          Meta:
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/issues/new"
              target="_blank"
              title="File a bug report"
              ><mat-icon name="bug_report"></mat-icon
            ></a>
            Report a bug
          </div>
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/#readme"
              target="_blank"
              title="Help"
              ><mat-icon name="help"></mat-icon
            ></a>
            Read help
          </div>
        </div>
      </div>
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
                      .record=${record}
                    ></game-summary>
                  </li>
                `
              )}
            </ul>
          </div>
        `
      )}`;
  }

  private renderNewPuzzleButton(size: string) {
    return html`
      <button @click=${this.newPuzzle} data-name="${size}">${size}</button>
    `;
  }

  private renderThemeChoice(themeTitle: string, icon: string) {
    const theme = themeTitle.toLowerCase();
    const cls = this.preferredTheme === theme ? 'selected' : '';
    return html`
      <div class=${cls}>
        <a @click=${this.setPreferredTheme}>
          <mat-icon name=${icon} data-theme=${theme}></mat-icon>
        </a>
        ${themeTitle} theme
      </div>
    `;
  }

  private renderTimerChoice(show: boolean, icon: string) {
    const cls = this.showTimer === show ? 'selected' : '';
    return html`
      <div class=${cls}>
        <a @click=${this.setShowTimer}>
          <mat-icon name=${icon} data-show=${show}></mat-icon>
        </a>
        ${show ? 'Show' : "Don't show"} the timer
      </div>
    `;
  }

  @property({reflect: true}) theme: Theme = 'light';
  @state() preferredTheme = getPreferredTheme();
  @state() showTimer = getShowTimer();

  // The puzzle that's expanded, if there is one.
  @property() expandedPuzzle: string = '';

  // The games to display.
  @state() private gameRecordsByDate: ReadonlyMap<string, GameRecord[]> | null =
    null;

  private readonly db = openWordgridDb();

  override connectedCallback(): void {
    super.connectedCallback();
    this.loadGames();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.gameRecordsByDate = null;
  }

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('expandedPuzzle')) {
      window.setTimeout(() => {
        const item = this.shadowRoot?.querySelector('game-summary[expanded]');
        if (item) {
          item.scrollIntoView({behavior: 'smooth'});
        }
      });
    }
  }

  private async newPuzzle(event: Event) {
    const name = (event.target as HTMLElement).dataset.name!;
    const spec = gameSpecByName(name);
    const date = new Date();
    const db = await this.db;
    for (let counter = 1; true; ++counter) {
      const puzzleId = PuzzleId.forSpec(spec, date, counter);
      const cursor = await db
        .transaction('games')
        .store.openCursor(puzzleId.seed);
      if (!cursor) {
        this.dispatchEvent(
          new CustomEvent('play-puzzle', {
            detail: {puzzleId: puzzleId},
            bubbles: true,
            composed: true,
          })
        );
        return;
      }
    }
  }

  private setPreferredTheme(event: Event) {
    const theme = (event.target as HTMLElement).dataset.theme as ThemeOrDefault;
    this.preferredTheme = theme;
    setPreferredTheme(theme);
  }

  private setShowTimer(event: Event) {
    const show = (event.target as HTMLElement).dataset.show === 'true';
    this.showTimer = show;
    setShowTimer(show);
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
}

declare global {
  interface HTMLElementTagNameMap {
    'history-view': HistoryView;
  }
}
