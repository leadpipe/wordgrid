import './events';
import './game-view';
import './grid-view';
import './history-view';
import './mat-icon';
import './solution-word';

import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {EventType, logEvent} from '../analytics';
import {gameSpecByName} from '../game/game-spec';
import {locAt} from '../game/loc';
import {Path} from '../game/paths';
import {PuzzleId, toIsoDateString} from '../game/puzzle-id';
import {
  isWordsComplete,
  openWordgridDb,
  sameWordsWereFound,
} from '../game/wordgrid-db';
import {requestPuzzle} from '../puzzle-service';
import {
  FromWorkerMessageType,
  GridResultMessage,
  ToWorkerMessageType,
} from '../worker/worker-types';
import {HistoryToShow, PuzzleToPlay} from './events';
import {GameView} from './game-view';
import {
  getCurrentTheme,
  getPreferredTheme,
  getSeenHelp,
  getShowTimer,
  prefsTarget,
  setPreferredTheme,
  setSeenHelp,
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
declare const buildDate: string;  // Defined in index.html during the build.

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

const EXAMPLE_PUZZLE_SEED = '1:1776-07-04:4:1';
const EXAMPLE_PUZZLE_ID = PuzzleId.fromSeed(EXAMPLE_PUZZLE_SEED);
const EXAMPLE_PUZZLE: GridResultMessage = {
  type: FromWorkerMessageType.GRID,
  message: {
    type: ToWorkerMessageType.MAKE_GRID,
    version: 1,
    seed: EXAMPLE_PUZZLE_SEED,
    size: 4,
    minLength: 3,
  },
  grid: ['TLHS', 'GTTS', 'AEOE', 'CSPB'],
  words: new Map(),
};
const EXAMPLE_PATH_STOPS: Path = {
  locs: [locAt(0, 3), locAt(1, 2), locAt(2, 2), locAt(3, 2), locAt(3, 1)],
};
const EXAMPLE_PATH_GATEPOST: Path = {
  locs: [
    locAt(1, 0),
    locAt(2, 0),
    locAt(1, 1),
    locAt(2, 1),
    locAt(3, 2),
    locAt(2, 2),
    locAt(1, 3),
    locAt(1, 2),
  ],
};

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
        margin-top: 64px;
        max-width: 360px;
        max-height: calc(95vh - 64px);
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

      .close {
        display: block;
        text-align: right;
        padding-right: 0;
      }

      .dialog-header {
        margin: 8px 0px 4px;
        padding-left: 8px;
        border-bottom: 1px solid gray;
        font-size: 90%;
      }

      .selected {
        background: var(--highlight-background);
      }

      .examples {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #help grid-view {
        width: 200px;
        height: 200px;
        flex: 0 0 auto;
      }

      .build-date {
        font-size: 80%;
        margin-top: 16px;
      }
    `,
  ];

  override render() {
    return [this.dialogRenderer?.call(this), this.renderPage()];
  }

  private renderHelpDialog(): TemplateResult {
    return html`
      <dialog
        id="help"
        @close=${this.helpClosed}
        @keydown=${this.handleDialogKey}
      >
        <a class="close" @click=${this.closeDialog} title="Close"
          ><mat-icon name="clear"></mat-icon
        ></a>
        <div class="dialog-header">How to play Wordgrid</div>
        <div class="may-scroll">
          <ul>
            <li>Find as many words as you can before the timer runs out.</li>
            <li>
              Trace letters through the grid, and lift your finger to mark a
              word.
            </li>
            <li>Or type, and hit Enter to mark a word.</li>
          </ul>
          <div class="examples">
            Example words: ${this.renderHelpOption('STOPS', 0)}
            ${this.renderHelpOption('GATEPOST', 1)}
            <grid-view
              theme=${this.theme}
              padding="10"
              .isPaused=${false}
              .puzzleId=${EXAMPLE_PUZZLE_ID}
              .puzzle=${EXAMPLE_PUZZLE}
              .externalPath=${this.helpOption === 0
                ? EXAMPLE_PATH_STOPS
                : EXAMPLE_PATH_GATEPOST}
            ></grid-view>
          </div>
        </div>
        <div class="dialog-header">For more information</div>
        <div>
          <a href="https://github.com/leadpipe/wordgrid/#readme" target="_blank"
            ><mat-icon name="info"></mat-icon> Read site overview</a
          >
        </div>
        <div class="build-date">
          Built at ${buildDate}
        </div>
      </dialog>
    `;
  }

  private renderSettingsDialog(): TemplateResult {
    return html`
      <dialog
        id="settings"
        @close=${this.settingsClosed}
        @keydown=${this.handleDialogKey}
      >
        <a class="close" @click=${this.closeDialog} title="Close"
          ><mat-icon name="clear"></mat-icon
        ></a>
        <div class="dialog-header">New puzzle</div>
        <div>
          ${this.renderNewPuzzleButton('Small')}
          ${this.renderNewPuzzleButton('Medium')}
          ${this.renderNewPuzzleButton('Large')}
        </div>
        <div class="dialog-header">Theme</div>
        ${this.renderThemeChoice('Light', 'light_mode')}
        ${this.renderThemeChoice('Dark', 'dark_mode')}
        ${this.renderThemeChoice('Auto', 'contrast')}
        <div class="dialog-header">Timer</div>
        ${this.renderTimerChoice(true, 'visibility')}
        ${this.renderTimerChoice(false, 'visibility_off')}
        <div class="dialog-header">Meta</div>
        <div>
          <a @click=${this.handleShowHelp} title="Help"
            ><mat-icon name="help"></mat-icon> How to play</a
          >
        </div>
        <div>
          <a
            href="https://github.com/leadpipe/wordgrid/#readme"
            target="_blank"
            title="Overview"
            ><mat-icon name="info"></mat-icon> Read site overview</a
          >
        </div>
        <div>
          <a
            href="https://github.com/leadpipe/wordgrid/issues/new"
            target="_blank"
            title="File a bug report"
            ><mat-icon name="bug_report"></mat-icon> Report a bug</a
          >
        </div>
      </dialog>
    `;
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
            .selectShareAs=${this.selectShareAs}
          ></history-view>
        `;
      default:
        ensureExhaustiveSwitch(this.page);
    }
  }

  private renderHelpOption(word: string, option: number) {
    const cls = this.helpOption === option ? 'selected' : '';
    return html`
      <span class=${cls}
        ><a @click=${this.setHelpOption} data-option=${option} tabindex="0"
          >${word}</a
        ></span
      >
    `;
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
  @state() selectShareAs = false;
  @state() resumeImmediately = false;
  @state() preferredTheme = getPreferredTheme();
  @state() showTimer = getShowTimer();
  @state() loadingWords = true;
  @state() dialogRenderer?: (this: LeadpipeWordgrid) => TemplateResult;
  @state() helpOption = 0;
  @query('game-view') gameView?: GameView;
  @query('dialog') dialog?: HTMLDialogElement;

  private readonly db = openWordgridDb();

  constructor() {
    super();
    this.addEventListener('play-puzzle', event => this.handlePlayPuzzle(event));
    this.addEventListener('show-help', () => this.handleShowHelp());
    this.addEventListener('show-history', e => this.handleShowHistory(e));
    this.addEventListener('show-settings', () => this.handleShowSettings());

    this.trackWordsLoading();
    this.startApp();

    refreshDaily(this);

    if (!getSeenHelp()) {
      window.setTimeout(() => void this.handleShowHelp());
    }
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

  private pauseGame(why: string) {
    this.gameView?.pauseGame(/*auto=*/false, why);  // All our pauses are interactive
  }

  private handlePlayPuzzle(event: CustomEvent<PuzzleToPlay>) {
    this.pauseGame('play event');
    this.page = 'play';
    this.puzzleSeed = event.detail.puzzleId.seed;
    this.resumeImmediately = event.detail.resume ?? false;
    this.updateLocation();
  }

  private handleShowHistory(event: CustomEvent<HistoryToShow>) {
    this.pauseGame('history event');
    this.page = 'history';
    this.puzzleSeed = event.detail?.puzzleId?.seed ?? '';
    this.selectShareAs = Boolean(event.detail?.selectShareAs);
    this.updateLocation();
  }

  private async showDialog(
    dialogRenderer: (this: LeadpipeWordgrid) => TemplateResult
  ) {
    this.pauseGame('show dialog');
    this.dialogRenderer = dialogRenderer;
    await 0;
    this.dialog?.showModal();
  }

  private hideDialog() {
    this.dialogRenderer = undefined;
  }

  private closeDialog() {
    this.dialog?.close();
  }

  private handleShowHelp() {
    this.showDialog(this.renderHelpDialog);
    logEvent(EventType.ACTION, {category: 'help opened'});
  }

  private helpClosed() {
    this.hideDialog();
    logEvent(EventType.ACTION, {category: 'help closed'});
    setSeenHelp();
  }

  private handleShowSettings() {
    this.showDialog(this.renderSettingsDialog);
    logEvent(EventType.ACTION, {category: 'settings opened'});
  }

  private settingsClosed() {
    this.hideDialog();
    logEvent(EventType.ACTION, {category: 'settings closed'});
  }

  private handleDialogKey(event: KeyboardEvent) {
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

  private setHelpOption(event: Event) {
    this.helpOption = Number(this.findData(event, 'option'));
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
    this.closeDialog();
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
      const mostRecentCursor = await db
        .transaction('games')
        .store.index('by-last-played')
        .openCursor(null, 'prev');
      if (
        mostRecentCursor &&
        toIsoDateString(mostRecentCursor.key) === dailyId.dateString &&
        !isWordsComplete(mostRecentCursor.value.wordsFound)
      ) {
        this.puzzleSeed = mostRecentCursor.value.puzzleId;
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
