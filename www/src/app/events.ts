import {PuzzleId} from '../game/puzzle-id';
import {Theme} from './types';

export interface InputWords {
  /** The words input. */
  readonly words: readonly string[];

  /** When true, the words might not be possible within the grid. */
  readonly checkPossible?: boolean;
}

export interface PuzzleToPlay {
  /** The ID of the puzzle to play. */
  readonly puzzleId: PuzzleId;
  /** If true, resume the puzzle right away. */
  readonly resume?: boolean;
}

export interface HistoryToShow {
  /** The ID of the puzzle to expand in the history list, or undefined. */
  readonly puzzleId: PuzzleId | undefined;
  /** If true, select the "share as" input field for the expanded puzzle. */
  readonly selectShareAs?: boolean;
}

declare global {
  interface HTMLElementEventMap {
    /**
     * Sent by grid-view when the user traces or types a new letter in the grid.
     */
    'words-traced': CustomEvent<InputWords>;

    /**
     * Sent by grid-view when the user finishes tracing letters in the grid, or
     * hits enter.
     */
    'words-selected': CustomEvent<InputWords>;

    /**
     * Sent to initiate a switch to the play page showing the given puzzle.
     */
    'play-puzzle': CustomEvent<PuzzleToPlay>;

    /**
     * Sent to initiate a switch to the history page, maybe with a puzzle's
     * entry expanded.
     */
    'show-history': CustomEvent<HistoryToShow>;

    /**
     * Sent by solution-word when the user clicks on a word to expand it, and
     * also when the word collapses again.  The content is the word when it's
     * expanded, and the empty string when it collapses.
     */
    'word-expanded': CustomEvent<string>;

    /**
     * Sent by game-timer when the time is up.  The event detail tells whether
     * the timer was being shown.
     */
    'timer-expired': CustomEvent<boolean>;

    /**
     * Sent by meta-panel when the user clicks the settings icon.
     */
    'show-settings': CustomEvent<void>;

    /**
     * Sent by meta-panel when the user clicks the help icon.
     */
     'show-help': CustomEvent<void>;

     /**
     * Sent by game-summary when it has loaded its game.
     */
    'game-loaded': CustomEvent<PuzzleId>;
  }
}

/**
 * The custom events sent by the preferences module.
 */
export interface PrefsEventMap {
  /** Sent by prefs when the current theme changes (for any reason). */
  'current-theme': CustomEvent<Theme>;

  /** Sent by prefs when the showTimer pref changes. */
  'show-timer': CustomEvent<boolean>;
}

export class PrefsEventTarget extends EventTarget {
  override addEventListener<K extends keyof PrefsEventMap>(
    type: K,
    listener: (this: PrefsEventTarget, ev: PrefsEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void {
    super.addEventListener(type, listener as EventListener, options);
  }
  override removeEventListener<K extends keyof PrefsEventMap>(
    type: K,
    listener: (this: PrefsEventTarget, ev: PrefsEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void {
    super.removeEventListener(type, listener as EventListener, options);
  }
}
