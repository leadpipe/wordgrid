import './events';
import './game-view';
import './history-view';
import './mat-icon';

import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {gameSpecByName} from '../game/game-spec';
import {PuzzleId} from '../game/puzzle-id';
import {openWordgridDb} from '../game/wordgrid-db';
import {Theme, ThemeOrAuto} from './types';
import {
  getCurrentTheme,
  getPreferredTheme,
  getShowTimer,
  prefsTarget,
  setPreferredTheme,
  setShowTimer,
} from './prefs';
import {lastUsedPlus} from './usage';
import {PuzzleToPlay} from './events';
import {
  DARK_BLUE,
  DARK_THEME_BACKGROUND,
  DARK_THEME_TEXT,
  LIGHT_BLUE,
  LIGHT_THEME_BACKGROUND,
  LIGHT_THEME_TEXT,
  MAY_SCROLL_CLASS,
} from './styles';
import {ensureExhaustiveSwitch} from './utils';

type Page = 'play' | 'history';

const MIN_IDLE_TIME_MS = 5 * 60 * 1000;
const REFRESH_POLL_TIME_MS = 60 * 60 * 1000;
let previousPuzzleSeed = PuzzleId.daily().seed;
let pendingRefreshTimeout: number | undefined = undefined;
function refreshDaily(root: LeadpipeWordgrid) {
  window.clearTimeout(pendingRefreshTimeout);
  // Check for the next day having arrived, and switch to its puzzle.
  const current = PuzzleId.daily();
  if (current.seed > previousPuzzleSeed) {
    // It's a new day.  If enough time has passed since the last use of the app,
    // make the switch.  Otherwise, postpone and try again later.
    if (current.date > lastUsedPlus(MIN_IDLE_TIME_MS)) {
      previousPuzzleSeed = current.seed;
      root.dispatchEvent(
        new CustomEvent('play-puzzle', {
          detail: {puzzleId: current},
          bubbles: true,
          composed: true,
        })
      );
    }
  }
  pendingRefreshTimeout = window.setTimeout(
    () => refreshDaily(root),
    REFRESH_POLL_TIME_MS
  );
}

/** Top-level component. */
@customElement('leadpipe-wordgrid')
export class LeadpipeWordgrid extends LitElement {
  static override styles = [
    MAY_SCROLL_CLASS,
    css`
      :host {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        --background: ${LIGHT_THEME_BACKGROUND};
        --text-color: ${LIGHT_THEME_TEXT};
        --highlight-background: ${LIGHT_BLUE};
        --scrollbar-thumb-color: #bbb;
        --scrollbar-track-color: #eee;
        background: var(--background);
        color: var(--text-color);
      }

      :host([theme='dark']) {
        --background: ${DARK_THEME_BACKGROUND};
        --text-color: ${DARK_THEME_TEXT};
        --highlight-background: ${DARK_BLUE};
        --scrollbar-thumb-color: #555;
        --scrollbar-track-color: #333;
      }

      dialog {
        background: var(--background);
        color: var(--text-color);
        padding: 4px 4px 12px;
      }

      dialog > * {
        padding-left: 8px;
        padding-right: 8px;
      }

      a {
        cursor: pointer;
        text-decoration: none;
      }

      :host a {
        color: var(--text-color);
      }

      #close-settings {
        display: block;
        text-align: right;
        padding-right: 0;
      }

      .settings-header {
        margin: 8px 0px 4px;
        padding-left: 8px;
        border-bottom: 1px solid gray;
        font-size: 90%;
      }

      .selected {
        background: var(--highlight-background);
      }
    `,
  ];

  override render() {
    return [
      html`
        <dialog
          id="settings"
          @cancel=${this.settingsCanceled}
          @keydown=${this.handleSettingsKey}
        >
          <a id="close-settings" @click=${this.closeSettings} title="Close"
            ><mat-icon name="clear"></mat-icon
          ></a>
          <div class="settings-header">New puzzle</div>
          <div>
            ${this.renderNewPuzzleButton('Small')}
            ${this.renderNewPuzzleButton('Medium')}
            ${this.renderNewPuzzleButton('Large')}
          </div>
          <div class="settings-header">Theme</div>
          ${this.renderThemeChoice('Light', 'light_mode')}
          ${this.renderThemeChoice('Dark', 'dark_mode')}
          ${this.renderThemeChoice('Auto', 'contrast')}
          <div class="settings-header">Timer</div>
          ${this.renderTimerChoice(true, 'visibility')}
          ${this.renderTimerChoice(false, 'visibility_off')}
          <div class="settings-header">Meta</div>
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/issues/new"
              target="_blank"
              title="File a bug report"
              ><mat-icon name="bug_report"></mat-icon> Report a bug</a
            >
          </div>
          <div>
            <a
              href="https://github.com/leadpipe/wordgrid/#readme"
              target="_blank"
              title="Help"
              ><mat-icon name="help"></mat-icon> Read help</a
            >
          </div>
        </dialog>
      `,
      this.renderPage(),
    ];
  }

  private renderPage(): TemplateResult {
    switch (this.page) {
      case 'play':
        return html`
          <game-view
            theme=${this.theme}
            class="may-scroll"
            .puzzleId=${PuzzleId.fromSeed(this.puzzleSeed)}
            .resumeImmediately=${this.resumeImmediately}
            .dialogShowing=${this.dialogShowing}
          ></game-view>
        `;
      case 'history':
        return html`
          <history-view
            theme=${this.theme}
            class="may-scroll"
            expandedPuzzle=${this.puzzleSeed}
          ></history-view>
        `;
      default:
        ensureExhaustiveSwitch(this.page);
    }
  }

  private renderThemeChoice(themeTitle: string, icon: string) {
    const theme = themeTitle.toLowerCase();
    const cls = this.preferredTheme === theme ? 'selected' : '';
    return html`
      <div class=${cls}>
        <a @click=${this.setPreferredTheme} data-theme=${theme} tabindex="0">
          <mat-icon name=${icon}></mat-icon>
          ${themeTitle}
        </a>
      </div>
    `;
  }

  private renderTimerChoice(show: boolean, icon: string) {
    const cls = this.showTimer === show ? 'selected' : '';
    return html`
      <div class=${cls}>
        <a @click=${this.setShowTimer} data-show=${show} tabindex="0">
          <mat-icon name=${icon}></mat-icon>
          ${show ? 'Show' : "Don't show"} the timer
        </a>
      </div>
    `;
  }

  private renderNewPuzzleButton(size: string) {
    return html`
      <button @click=${this.newPuzzle} data-name="${size}">${size}</button>
    `;
  }

  @property({reflect: true}) theme: Theme = getCurrentTheme();

  @state() page: Page = 'play';
  @state() puzzleSeed: string = '';
  @state() resumeImmediately = false;
  @state() preferredTheme = getPreferredTheme();
  @state() showTimer = getShowTimer();
  @state() dialogShowing = false;
  @query('#settings') settingsDialog!: HTMLDialogElement;

  private readonly db = openWordgridDb();

  constructor() {
    super();
    this.interpretHash();
    this.addEventListener('play-puzzle', event => this.handlePlayPuzzle(event));
    this.addEventListener('show-history', event =>
      this.handleShowHistory(event)
    );
    this.addEventListener('show-settings', () => this.handleShowSettings());
    refreshDaily(this);
  }

  private readonly themeHandler = (event: CustomEvent<Theme>) => {
    this.theme = event.detail;
  };

  private readonly popstateHandler = () => {
    this.interpretHash();
  };

  private readonly dailyPuzzleUpdater = () => {
    refreshDaily(this);
  };

  override connectedCallback(): void {
    super.connectedCallback();
    prefsTarget.addEventListener('current-theme', this.themeHandler);
    window.addEventListener('popstate', this.popstateHandler);
    window.addEventListener('focus', this.dailyPuzzleUpdater);
    window.addEventListener('blur', this.dailyPuzzleUpdater);
    document.addEventListener('visibilitychange', this.dailyPuzzleUpdater);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    prefsTarget.removeEventListener('current-theme', this.themeHandler);
    window.removeEventListener('popstate', this.popstateHandler);
    window.removeEventListener('focus', this.dailyPuzzleUpdater);
    window.removeEventListener('blur', this.dailyPuzzleUpdater);
    document.removeEventListener('visibilitychange', this.dailyPuzzleUpdater);
  }

  private interpretHash() {
    const {hash} = location;
    let page = '';
    let puzzleSeed = '';
    if (hash.startsWith('#')) {
      // Treat the hash like its own URL relative to the base.  Currently we
      // only use the path portion.
      const {pathname} = new URL(`${location.origin}/${hash.substring(1)}`);
      const parts = pathname.substring(1).split('/');
      page = parts[0];
      puzzleSeed = parts[1] ?? '';
    }
    if (page !== 'history') {
      page = 'play';
    }
    if (page === 'play' && !puzzleSeed) {
      puzzleSeed = PuzzleId.daily().seed;
    }
    this.page = page as Page;
    this.puzzleSeed = puzzleSeed;
    this.resumeImmediately = false;
    this.updateLocation();
  }

  private updateLocation() {
    const {page, puzzleSeed} = this;
    const newHash = puzzleSeed ? `#${page}/${puzzleSeed}` : `#${page}`;
    if (newHash !== location.hash) {
      history.replaceState(null, '', newHash);
    }
  }

  private handlePlayPuzzle(event: CustomEvent<PuzzleToPlay>) {
    this.page = 'play';
    this.puzzleSeed = event.detail.puzzleId.seed;
    this.resumeImmediately = event.detail.resume ?? false;
    this.updateLocation();
  }

  private handleShowHistory(event: CustomEvent<PuzzleId | undefined>) {
    this.page = 'history';
    this.puzzleSeed = event.detail?.seed ?? '';
    this.updateLocation();
  }

  private handleShowSettings() {
    this.dialogShowing = true;
    this.settingsDialog.showModal();
  }

  private settingsCanceled() {
    this.dialogShowing = false;
  }

  private handleSettingsKey(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
      case 'Escape':
        return;  // Allow the default handling for these keys.
      case 'Enter':
      case ' ':
        (event.target as HTMLElement|null)?.click();  // Treat the same as a click.
    }
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  private closeSettings() {
    this.dialogShowing = false;
    this.settingsDialog.close();
  }

  private setPreferredTheme(event: Event) {
    const theme = this.findData(event, 'theme') as ThemeOrAuto;
    this.preferredTheme = theme;
    setPreferredTheme(theme);
  }

  private setShowTimer(event: Event) {
    const show = this.findData(event, 'show') === 'true';
    this.showTimer = show;
    setShowTimer(show);
  }

  private findData(event: Event, dataName: string): string {
    let el = event.target as HTMLElement | null;
    while (el) {
      if (dataName in el.dataset) {
        return el.dataset[dataName]!;
      }
      el = el.parentElement;
    }
    return '';
  }

  private async newPuzzle(event: Event) {
    this.closeSettings();
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
}

declare global {
  interface HTMLElementTagNameMap {
    'leadpipe-wordgrid': LeadpipeWordgrid;
  }
}
