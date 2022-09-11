import './events';
import './game-view';
import './history-view';

import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {PuzzleId} from '../game/puzzle-id';
import {Theme} from './types';
import {getCurrentTheme, prefsTarget} from './prefs';
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
  static override styles = [MAY_SCROLL_CLASS, css`
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
  `];

  override render() {
    switch (this.page) {
      case 'play':
        return html`
          <game-view
            theme=${this.theme}
            class="may-scroll"
            .puzzleId=${PuzzleId.fromSeed(this.puzzleSeed)}
            .resumeImmediately=${this.resumeImmediately}
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
    }
  }

  constructor() {
    super();
    this.interpretHash();
    this.addEventListener('play-puzzle', event => this.handlePlayPuzzle(event));
    this.addEventListener('show-history', event =>
      this.handleShowHistory(event)
    );
    refreshDaily(this);
  }

  @property({reflect: true}) theme: Theme = getCurrentTheme();

  @state() page: Page = 'play';
  @state() puzzleSeed: string = '';
  @state() resumeImmediately = false;

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
}

declare global {
  interface HTMLElementTagNameMap {
    'leadpipe-wordgrid': LeadpipeWordgrid;
  }
}
