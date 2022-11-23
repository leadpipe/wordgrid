import './events';
import './game-view';
import './history-view';
import './mat-icon';

import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {EventType, logEvent} from '../analytics';
import {gameSpecByName} from '../game/game-spec';
import {PuzzleId, toIsoDateString} from '../game/puzzle-id';
import {
  isGameComplete,
  openWordgridDb,
  sameWordsWereFound,
} from '../game/wordgrid-db';
import {requestPuzzle} from '../puzzle-service';
import {PuzzleToPlay} from './events';
import {GameView} from './game-view';
import {
  getCurrentTheme,
  getPreferredTheme,
  getShowTimer,
  prefsTarget,
  setPreferredTheme,
  setShowTimer,
} from './prefs';
import {decodeShareBits, decodeShareName} from './sharing';
import {
  DARK_BLUE,
  DARK_THEME_BACKGROUND,
  DARK_THEME_TEXT,
  LIGHT_BLUE,
  LIGHT_THEME_BACKGROUND,
  LIGHT_THEME_TEXT,
  MAY_SCROLL_CLASS,
} from './styles';
import {Theme, ThemeOrAuto} from './types';
import {lastUsedPlus} from './usage';
import {ensureExhaustiveSwitch} from './utils';

type Page = 'play' | 'history';

const SECOND_MS = 1000;
const MINUTE_MS = 60 * SECOND_MS;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;
const MIN_IDLE_TIME_MS = 5 * MINUTE_MS;
const REFRESH_POLL_TIME_MS = HOUR_MS;
const MAX_PROCESS_LIFETIME = 7 * DAY_MS;
const processStartTime = Date.now();
let dailyPuzzleId = PuzzleId.daily();
let pendingRefreshTimeout: number | undefined = undefined;
async function refreshDaily(root: LeadpipeWordgrid) {
  window.clearTimeout(pendingRefreshTimeout);
  // Check for the next day having arrived, and switch to its puzzle.
  const checkTime = Date.now();
  const current = PuzzleId.daily();
  if (current.seed > dailyPuzzleId.seed) {
    // It's a new day.  If enough time has passed since the last use of the app,
    // attempt to reload, or just make the switch.  Otherwise, postpone and try
    // again later.
    if (checkTime > lastUsedPlus(MIN_IDLE_TIME_MS)) {
      logEvent(EventType.SYSTEM, {category: 'made daily puzzle'});
      dailyPuzzleId = current;
      // Clean up the DB, then redirect to the new puzzle.
      await root.cleanDb();
      root.dispatchEvent(
        new CustomEvent('play-puzzle', {
          detail: {puzzleId: current},
          bubbles: true,
          composed: true,
        })
      );
      // But if enough time has passed since this page first loaded, let's
      // reload the app.
      if (Date.now() - processStartTime > MAX_PROCESS_LIFETIME) {
        location.replace(location.pathname);
      }
    }
  }
  pendingRefreshTimeout = window.setTimeout(
    () => refreshDaily(root),
    REFRESH_POLL_TIME_MS
  );
}

logEvent(EventType.SYSTEM, {category: 'page loaded'});

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
          @close=${this.settingsClosed}
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
            .loadingWords=${this.loadingWords}
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
  @state() puzzleSeed: string = dailyPuzzleId.seed;
  @state() resumeImmediately = false;
  @state() preferredTheme = getPreferredTheme();
  @state() showTimer = getShowTimer();
  @state() loadingWords = true;
  @query('#settings') settingsDialog!: HTMLDialogElement;

  private readonly db = openWordgridDb();

  constructor() {
    super();
    this.addEventListener('play-puzzle', event => this.handlePlayPuzzle(event));
    this.addEventListener('show-history', e => this.handleShowHistory(e));
    this.addEventListener('show-settings', () => this.handleShowSettings());

    this.trackWordsLoading();
    this.startApp();

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

  /**
   * Treats the hash portion of the current location as if it was a URL path and
   * query, and splits it into three pieces: the page (meaning the first path
   * segment), any path segments that follow the page, and any query parameters.
   */
  private parseHash(): [string, string[], URLSearchParams] {
    const {hash} = location;
    if (hash.startsWith('#')) {
      // Treat the hash like its own URL relative to the base.
      const {pathname, searchParams} = new URL(
        `${location.origin}/${hash.substring(1)}`
      );
      const parts = pathname.substring(1).split('/');
      const page = parts.shift() ?? '';
      return [page, parts, searchParams];
    }
    return ['', [], new URLSearchParams()];
  }

  private interpretHash() {
    let [page, parts, _params] = this.parseHash();
    let puzzleSeed = parts[0] ?? '';
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

  private pauseGame() {
    this.gameView?.pausePlay();
  }

  private handlePlayPuzzle(event: CustomEvent<PuzzleToPlay>) {
    this.page = 'play';
    this.puzzleSeed = event.detail.puzzleId.seed;
    this.resumeImmediately = event.detail.resume ?? false;
    this.updateLocation();
  }

  private handleShowHistory(event: CustomEvent<PuzzleId | undefined>) {
    this.pauseGame();
    this.page = 'history';
    this.puzzleSeed = event.detail?.seed ?? '';
    this.updateLocation();
  }

  private handleShowSettings() {
    this.pauseGame();
    this.settingsDialog.showModal();
    logEvent(EventType.ACTION, {category: 'settings opened'});
  }

  private settingsClosed() {
    logEvent(EventType.ACTION, {category: 'settings closed'});
  }

  private handleSettingsKey(event: KeyboardEvent) {
    switch (event.key) {
      case 'Tab':
      case 'Escape':
        return; // Allow the default handling for these keys.
      case 'Enter':
      case ' ':
        (event.target as HTMLElement | null)?.click(); // Treat the same as a click.
    }
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  private closeSettings() {
    this.settingsDialog.close();
  }

  private setPreferredTheme(event: Event) {
    const theme = this.findData(event, 'theme') as ThemeOrAuto;
    this.preferredTheme = theme;
    setPreferredTheme(theme);
    logEvent(EventType.ACTION, {category: 'theme set', detail: theme});
  }

  private setShowTimer(event: Event) {
    const show = this.findData(event, 'show') === 'true';
    this.showTimer = show;
    setShowTimer(show);
    logEvent(EventType.ACTION, {
      category: 'show-timer set',
      detail: String(show),
    });
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
    let nextPuzzleId = PuzzleId.forSpec(spec);
    const db = await this.db;
    for (const seed of await db.getAllKeys('games', nextPuzzleId.toDbRange())) {
      const id = PuzzleId.fromSeed(seed);
      if (nextPuzzleId.compareTo(id) <= 0) {
        nextPuzzleId = id.next();
      }
    }
    this.dispatchEvent(
      new CustomEvent('play-puzzle', {
        detail: {puzzleId: nextPuzzleId},
        bubbles: true,
        composed: true,
      })
    );
    logEvent(EventType.ACTION, {category: 'new puzzle', detail: name});
  }

  private async trackWordsLoading() {
    await requestPuzzle(dailyPuzzleId);
    this.loadingWords = false;
  }

  private async startApp() {
    await this.cleanDb();
    let [page, pathParts, _params] = this.parseHash();
    const puzzleSeed = pathParts.shift() ?? '';
    const dailyId = PuzzleId.daily();
    const dailySeed = dailyId.seed;
    if (page === 'history' || (page === 'play' && puzzleSeed)) {
      this.page = page;
      this.puzzleSeed = puzzleSeed;
      this.updateLocation();
      return;
    }
    if (page === 'share') {
      this.puzzleSeed = puzzleSeed;
      await this.importShare(puzzleSeed, pathParts);
    } else {
      const db = await this.db;
      const dailyRecord = await db.get('games', dailySeed);
      const mostRecentCursor = await db
        .transaction('games')
        .store.index('by-last-played')
        .openCursor(null, 'prev');
      const mostRecentSeed = mostRecentCursor?.value.puzzleId;
      if (
        mostRecentSeed &&
        (isGameComplete(dailyRecord) ||
          toIsoDateString(mostRecentCursor.key) === dailyId.dateString)
      ) {
        this.puzzleSeed = mostRecentSeed;
      } else {
        this.puzzleSeed = dailySeed;
      }
    }
    this.page = 'play';
    this.updateLocation();
  }

  private async importShare(puzzleSeed: string, pathParts: string[]) {
    const db = await this.db;
    const name = decodeShareName(pathParts);
    let wordsShared;
    try {
      wordsShared = decodeShareBits(puzzleSeed, name, pathParts);
    } catch (e) {
      console.log('Bad share URL', location, e);
      logEvent(EventType.SYSTEM, {category: 'bad share url', detail: `${e}`});
      alert(
        `Unable to import ${name}'s share of ${puzzleSeed}.  Did it get truncated?`
      );
      return;
    }

    const myRecord = await db.get('games', puzzleSeed);
    if (myRecord && sameWordsWereFound(myRecord.wordsFound, wordsShared)) {
      logEvent(EventType.SYSTEM, {category: 'self import'});
      alert(`${name}'s share of ${puzzleSeed} is identical to your game.`);
      return;
    }

    const ix = db.transaction('shares').store.index('by-puzzle-id');
    let already = null;
    for await (const cursor of ix.iterate(puzzleSeed)) {
      if (sameWordsWereFound(cursor.value.wordsFound, wordsShared)) {
        already = cursor.value.person;
        break;
      }
    }
    if (already === name) {
      logEvent(EventType.SYSTEM, {category: 'duplicate import'});
      alert(`You've already imported ${name}'s share of ${puzzleSeed}.`);
    } else if (already !== null) {
      logEvent(EventType.SYSTEM, {category: 'duplicate import different name'});
      alert(
        `You've already imported ${name}'s share of ${puzzleSeed}, under the name '${already}'.`
      );
    } else {
      await db.put('shares', {
        person: name,
        puzzleId: puzzleSeed,
        wordsFound: wordsShared,
      });
      logEvent(EventType.SYSTEM, {category: 'import', detail: puzzleSeed});
      alert(`Successfully imported ${name}'s share of ${puzzleSeed}.`);
    }
  }

  /**
   * Discards games that are too old.  Keeps at least 10, and at most 100 or 30
   * days' worth, whatever is less.
   */
  async cleanDb() {
    const db = await this.db;
    const ix = db.transaction('games').store.index('by-last-played');
    let count = 0;
    const minDateString = toIsoDateString(new Date(Date.now() - 30 * DAY_MS));
    const toDelete = [];
    for await (const cursor of ix.iterate(null, 'prev')) {
      ++count;
      if (
        count <= 10 ||
        (count <= 100 && toIsoDateString(cursor.key) >= minDateString)
      ) {
        continue;
      }
      toDelete.push(cursor.value.puzzleId);
    }
    for (const puzzleId of toDelete) {
      await db.delete('games', puzzleId);
      const shareKeys = await db.getAllKeysFromIndex(
        'shares',
        'by-puzzle-id',
        puzzleId
      );
      for (const key of shareKeys) {
        await db.delete('shares', key);
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'leadpipe-wordgrid': LeadpipeWordgrid;
  }
}
