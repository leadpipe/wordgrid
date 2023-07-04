import './events';

import {css, html, LitElement, nothing, PropertyValues, svg} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ref} from 'lit/directives/ref.js';
import {PuzzleId} from '../game/puzzle-id';
import {Loc, locAt} from '../game/loc';
import {Path} from '../game/paths';
import {GridResultMessage} from '../worker/worker-types';
import {Theme} from './types';
import {
  BOTH_THEMES_BORDER,
  DARK_BLUE,
  DARK_BLUE_TRANSPARENT,
  DARK_THEME_TEXT,
  LIGHT_BLUE,
  LIGHT_BLUE_TRANSPARENT,
  LIGHT_THEME_TEXT,
} from './styles';

/**
 * Displays a word grid puzzle.
 */
@customElement('grid-view')
export class GridView extends LitElement {
  static override styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        --path-start: ${LIGHT_BLUE};
        --path: ${LIGHT_BLUE_TRANSPARENT};
        --text-fill: ${LIGHT_THEME_TEXT};
      }

      :host([theme='dark']) {
        --path-start: ${DARK_BLUE};
        --path: ${DARK_BLUE_TRANSPARENT};
        --text-fill: ${DARK_THEME_TEXT};
      }

      svg {
        overflow: hidden;
        touch-action: none;
      }

      circle {
        fill: none;
        stroke: ${BOTH_THEMES_BORDER};
      }

      text {
        font: 800 6.5px 'Merriweather Sans';
        dominant-baseline: central;
        text-anchor: middle;
        user-select: none;
      }

      :host([isPaused]) text {
        fill: orange;
      }

      :host(:not([isPaused])) text {
        fill: var(--text-fill);
      }

      .path-start {
        fill: var(--path-start);
      }

      .path {
        fill: none;
        stroke: var(--path);
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }
    `,
  ];

  override render() {
    const {cellSpan, hoverLoc, isPaused, puzzle, puzzleId, trail} = this;
    if (!cellSpan || !puzzleId) return;
    const gameSize = puzzleId.spec.size;
    const sideSize = 10 * gameSize; // Each cell is 10 units
    const grid = isPaused || !puzzle ? this.pausedGrid(gameSize) : puzzle.grid;
    const pathStartLoc = hoverLoc ?? trail[0];
    const strokeWidth = 10 / cellSpan;
    const radius = 5 - strokeWidth / 2;
    return html`
      <svg
        ${ref(this.svgChanged)}
        viewBox="0 0 ${sideSize} ${sideSize}"
        @pointerenter=${this.handlePointerEnter}
        @pointermove=${this.handlePointerHovering}
        @pointerleave=${this.handlePointerLeave}
        @pointercancel=${this.handlePointerCancel}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
      >
        <style>
          circle {
            stroke-width: ${strokeWidth}px;
          }
        </style>
        ${puzzleId.spec.locs.map(loc => {
          const {row, col} = loc;
          let letter = grid[row].charAt(col);
          if (letter === 'Q') letter = 'Qu';
          const x = col * 10 + 5;
          const y = row * 10 + 5;
          const cls = loc === pathStartLoc ? 'path-start' : '';
          return svg`
            <circle cx=${x} cy=${y} r=${radius} class=${cls} />
            <text x=${x} y=${y} data-row=${row} data-col=${col}>${letter}</text>
          `;
        })}
        ${this.renderTrail(trail)}
      </svg>
    `;
  }

  private renderTrail(trail: Loc[]) {
    if (!trail.length) return nothing;
    const parts = [
      svg`
      <path
        class="path"
        d="M ${trail[0].col * 10 + 5},${trail[0].row * 10 + 5}
           ${trail
             .map(({row, col}) => {
               return `L ${col * 10 + 5},${row * 10 + 5}`;
             })
             .join(' ')}
        " />
    `,
    ];
    return parts;
  }

  /** Light or dark mode. */
  @property({reflect: true}) theme: Theme = 'light';

  /** The ID of the puzzle we are displaying (or will display). */
  @property({
    attribute: false,
    hasChanged: (value: PuzzleId | null, oldValue: PuzzleId | null) => {
      if (value === oldValue) return false;
      if (value && oldValue && value.seed === oldValue.seed) return false;
      return true;
    },
  })
  puzzleId: PuzzleId | null = null;

  /** The puzzle we're displaying. */
  @property({attribute: false}) puzzle: GridResultMessage | null = null;

  @property({type: Boolean, reflect: true}) isPaused = true;

  @property({type: Boolean, reflect: true}) isInteractive = false;

  set externalPath(path: Path) {
    this.trail.length = 0;
    this.trail.push(...path.locs);
    this.requestUpdate('externalPath', {locs: []});
  }
  @property({attribute: false}) get externalPath(): Path {
    return {locs: this.trail};
  }

  private readonly keyHandler = (event: KeyboardEvent) =>
    this.handleKeyDown(event);

  private readonly resizeObserver = new ResizeObserver(async () => {
    this.calcMetrics();
  });

  override connectedCallback(): void {
    super.connectedCallback();
    this.resizeObserver.observe(this);
    if (this.isInteractive) {
      window.addEventListener('keydown', this.keyHandler);
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
    window.removeEventListener('keydown', this.keyHandler);
  }

  private svgChanged(svg?: Element) {
    if (svg instanceof SVGElement) {
      this.calcMetrics();
    }
  }

  private shouldInteract(): boolean {
    return this.isInteractive && !this.isPaused;
  }

  /** The possible input location the pointer last hovered over. */
  @state() private hoverLoc?: Loc;

  /** The current trail of selected locations. */
  @state() private trail: Loc[] = [];

  /**
   * The strings being traced out by the trail.  Normally this is just one
   * string, but in the presence of Qs it will double, following the Q alone on
   * one branch and QU on the other.
   */
  private readonly prefixes: string[] = [];

  private convertPointToLoc(event: PointerEvent): Loc | undefined {
    const data = (event.target as HTMLElement | null)?.dataset;
    if (data && 'row' in data) {
      const {row, col} = data;
      return locAt(Number(row), Number(col));
    }
    return undefined;
  }

  /**
   * If legal, adds the given location to the trail currently being traced, and
   * the letter at that location to the current set of prefixes.
   */
  private pushLoc(loc: Loc | undefined) {
    const {puzzle, trail, prefixes} = this;
    if (!puzzle || !loc) return;
    const index = trail.indexOf(loc);
    if (index >= 0) {
      // This location is already in use.  If it's the second-to-last one, undo
      // the last location.
      if (index === trail.length - 2) {
        trail.pop();
        this.trail = [...trail];
        if (prefixes[0].endsWith('Q')) {
          prefixes.length /= 2; // Toss the extra U-ending prefixes.
        }
        for (let i = 0; i < prefixes.length; ++i) {
          prefixes[i] = prefixes[i].substring(0, prefixes[i].length - 1);
        }
      }
      this.dispatchEvent(
        new CustomEvent('words-traced', {detail: {words: [...prefixes]}})
      );
      return;
    }
    if (trail.length && !loc.isAdjacentTo(trail[trail.length - 1])) {
      return;
    }
    this.trail = [...trail, loc];
    const char = puzzle.grid[loc.row].charAt(loc.col);
    if (prefixes.length) {
      for (let i = 0; i < prefixes.length; ++i) {
        prefixes[i] += char;
      }
    } else {
      prefixes.push(char);
    }
    if (char === 'Q') {
      prefixes.forEach(p => prefixes.push(p + 'U'));
    }
    this.dispatchEvent(
      new CustomEvent('words-traced', {detail: {words: [...prefixes]}})
    );
  }

  private handlePointerHovering(event: PointerEvent) {
    if (!this.shouldInteract()) return;
    const loc = this.convertPointToLoc(event);
    if (this.trail.length) {
      // We're tracing a word.
      this.pushLoc(loc);
    } else if (loc && this.puzzle) {
      this.hoverLoc = loc;
    } else {
      this.hoverLoc = undefined;
    }
  }

  private handlePointerEnter(event: PointerEvent) {
    this.handlePointerHovering(event);
  }

  private handlePointerLeave(_event: PointerEvent) {
    this.hoverLoc = undefined;
  }

  private handlePointerCancel(_event: PointerEvent) {
    this.dispatchEvent(
      new CustomEvent('words-selected', {detail: {words: []}})
    );
    this.resetPointerInput();
  }

  private handlePointerDown(event: PointerEvent) {
    if (!this.shouldInteract()) return;
    if ((event.target as Element).hasPointerCapture(event.pointerId)) {
      (event.target as Element).releasePointerCapture(event.pointerId);
    }
    const loc = this.convertPointToLoc(event);
    if (loc && this.puzzle) {
      this.resetPointerInput(); // Should be unnecessary
      this.pendingKeyboardInput = '';
      this.pushLoc(loc);
      this.hoverLoc = undefined;
    }
  }

  private handlePointerUp(_event: PointerEvent) {
    if (!this.shouldInteract()) return;
    if (this.puzzle) {
      this.dispatchEvent(
        new CustomEvent('words-selected', {detail: {words: [...this.prefixes]}})
      );
    }
    this.resetPointerInput();
  }

  private resetPointerInput() {
    this.trail = [];
    this.prefixes.length = 0;
    this.hoverLoc = undefined;
  }

  private pendingKeyboardInput = '';
  private pendingInputTimeoutId = 0;

  private clearPendingInputTimeout() {
    if (this.pendingInputTimeoutId) {
      window.clearTimeout(this.pendingInputTimeoutId);
      this.pendingInputTimeoutId = 0;
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!this.shouldInteract()) return;

    this.clearPendingInputTimeout();
    this.resetPointerInput();
    let update = false;
    switch (event.key) {
      case 'Enter':
        // Accept the pending input, if there is any.
        if (this.pendingKeyboardInput.length) {
          this.dispatchEvent(
            new CustomEvent('words-selected', {
              detail: {words: [this.pendingKeyboardInput], checkPossible: true},
            })
          );
          this.pendingKeyboardInput = '';
        }
        break;

      case 'Esc':
      case 'Escape':
      case 'Clear':
        // Cancel the pending input
        this.pendingKeyboardInput = '';
        update = true;
        break;

      case 'Backspace':
      case 'Del':
      case 'Delete':
        // Remove the last character from the pending input
        if (this.pendingKeyboardInput.length) {
          this.pendingKeyboardInput = this.pendingKeyboardInput.substring(
            0,
            this.pendingKeyboardInput.length - 1
          );
          update = true;
        }
        break;

      default:
        // If it's a letter, add it to the pending input
        if (event.key.length === 1) {
          const letter = event.key.toUpperCase();
          if (letter >= 'A' && letter <= 'Z') {
            this.pendingKeyboardInput += letter;
            update = true;
          }
        }
        break;
    }
    if (update) {
      const detail = {
        words: this.pendingKeyboardInput ? [this.pendingKeyboardInput] : [],
        checkPossible: true,
      };
      this.dispatchEvent(new CustomEvent('words-traced', {detail}));
    }
    if (this.pendingKeyboardInput) {
      this.pendingInputTimeoutId = window.setTimeout(() => {
        this.pendingKeyboardInput = '';
        this.dispatchEvent(
          new CustomEvent('words-selected', {detail: {words: []}})
        );
      }, 2500);
    }
  }
  override updated(changedProperties: PropertyValues) {
    let reset = false;
    if (changedProperties.has('puzzleId')) {
      reset = true;
      this.calcMetrics();
    }
    if (changedProperties.has('puzzle') || changedProperties.has('isPaused')) {
      reset = true;
    }
    if (changedProperties.has('externalPath')) {
      reset = false;
    }
    if (reset) {
      this.resetPointerInput();
    }
  }

  /** How many actual pixels are on each side of a cell. */
  @state() private cellSpan = 0;

  private calcMetrics() {
    const rect = this.getBoundingClientRect();
    const {puzzleId} = this;
    if (!puzzleId) return;
    const span = Math.min(rect.width, rect.height);
    const size = puzzleId.spec.size;
    this.cellSpan = (devicePixelRatio * span) / size;
  }

  private pausedGrid(puzzleSize: number): string[] {
    switch (puzzleSize) {
      case 4:
      default:
        return ['LEAD', 'PIPE', 'WORD', 'GRID'];
      case 5:
        return ['LEAD ', ' PIPE', '     ', 'WORD ', ' GRID'];
      case 6:
        return ['  LEAD', '  PIPE', '      ', '      ', 'WORD  ', 'GRID  '];
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-view': GridView;
  }
}
