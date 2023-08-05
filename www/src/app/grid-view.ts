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
  DARK_GREEN_TRANSPARENT,
  DARK_RED_TRANSPARENT,
  DARK_THEME_TEXT,
  GRID_TRANSFORM_TRANSITION,
  LIGHT_BLUE,
  LIGHT_BLUE_TRANSPARENT,
  LIGHT_GREEN_TRANSPARENT,
  LIGHT_RED_TRANSPARENT,
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
        --add: ${LIGHT_GREEN_TRANSPARENT};
        --del: ${LIGHT_RED_TRANSPARENT};
        --path: ${LIGHT_BLUE_TRANSPARENT};
        --path-start: ${LIGHT_BLUE};
        --text-fill: ${LIGHT_THEME_TEXT};
      }

      :host([theme='dark']) {
        --add: ${DARK_GREEN_TRANSPARENT};
        --del: ${DARK_RED_TRANSPARENT};
        --path: ${DARK_BLUE_TRANSPARENT};
        --path-start: ${DARK_BLUE};
        --text-fill: ${DARK_THEME_TEXT};
      }

      svg {
        overflow: hidden;
        touch-action: none;
      }

      svg * {
        pointer-events: none;
      }

      circle {
        fill: none;
        stroke: ${BOTH_THEMES_BORDER};
      }

      text {
        font-weight: 800;
        font-family: 'Merriweather Sans';
        dominant-baseline: central;
        text-anchor: middle;
        user-select: none;
        -webkit-user-select: none;
      }

      :host([isPaused]) text {
        fill: orange;
      }

      :host(:not([isPaused])) text {
        fill: var(--text-fill);
      }

      :host(.rotate) g {
        transform-origin: center;
        transform: rotate(-90deg);
        transition: transform ${GRID_TRANSFORM_TRANSITION};
      }

      :host(.flip) g {
        transform-origin: center;
        transform: scale(-1, 1);
        transition: transform ${GRID_TRANSFORM_TRANSITION};
      }

      .path-start {
        fill: var(--path-start);
      }

      .path {
        fill: none;
        stroke: var(--path);
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .del {
        fill: none;
        stroke: var(--del);
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .add {
        fill: none;
        stroke: var(--add);
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    `,
  ];

  override render() {
    const {cellSpan, hoverLoc, isPaused, puzzle, puzzleId, sidePixels, trail} =
      this;
    if (!cellSpan || !puzzleId) return;
    const gameSize = puzzleId.spec.size;
    const cellPixels = sidePixels / gameSize;
    const grid = isPaused || !puzzle ? this.pausedGrid(gameSize) : puzzle.grid;
    const pathStartLoc = hoverLoc ?? trail[0];
    const strokeWidth = cellPixels / cellSpan;
    const center = cellPixels / 2;
    const radius = (cellPixels - strokeWidth) / 2;
    return html`
      <svg
        ${ref(this.svgChanged)}
        viewBox="0 0 ${sidePixels} ${sidePixels}"
        width=${sidePixels}
        height=${sidePixels}
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
          text {
            font-size: ${cellPixels * 0.65}px;
          }
          .path {
            stroke-width: ${cellPixels * 0.2}px;
          }

          .del {
            stroke-width: ${cellPixels * 0.1}px;
          }

          .add {
            stroke-width: ${cellPixels * 0.1}px;
          }
        </style>
        ${puzzleId.spec.locs.map(loc => {
          const {row, col} = loc;
          let letter = grid[row].charAt(col);
          if (letter === 'Q') letter = 'Qu';
          const cls = loc === pathStartLoc ? 'path-start' : '';
          return svg`
            <svg viewBox="0 0 ${cellPixels} ${cellPixels}" x=${
            col * cellPixels
          } y=${row * cellPixels} width=${cellPixels} height=${cellPixels}>
              <circle cx=${center} cy=${center} r=${radius} class=${cls} />
              <g>
                <text x=${center} y=${center}>${letter}</text>
              </g>
            </svg>
          `;
        })}
        ${this.renderTrail(trail, puzzleId.spec.locs, cellPixels, center)}
      </svg>
    `;
  }

  private renderTrail(
    trail: Loc[],
    locs: readonly Loc[],
    cellPixels: number,
    center: number
  ) {
    if (!trail.length) return nothing;
    const parts = [
      svg`
      <path
        class="path"
        d="M ${trail[0].col * cellPixels + center},${
        trail[0].row * cellPixels + center
      }
           ${trail
             .map(({row, col}) => {
               return `L ${col * cellPixels + center},${
                 row * cellPixels + center
               }`;
             })
             .join(' ')}
        " />
    `,
    ];
    if (this.isInteractive) {
      if (trail.length > 1) {
        // If you move over the 2nd-to-last location, we delete the last
        // location from the trail.
        const {row, col} = trail[trail.length - 2];
        parts.push(svg`
        <path
          class="del"
          d="M ${col * cellPixels + center * 0.6},${
          row * cellPixels + center * 0.6
        }
             l ${cellPixels * 0.4},${cellPixels * 0.4}
             m -${cellPixels * 0.4},0
             l ${cellPixels * 0.4},-${cellPixels * 0.4}
          "/>
      `);
      }
      const used = new Set(trail);
      const head = trail[trail.length - 1];
      for (const loc of locs) {
        if (used.has(loc) || !loc.isAdjacentTo(head)) continue;
        parts.push(svg`
        <path
          class="add"
          d="M ${loc.col * cellPixels + center},${
          loc.row * cellPixels + center * 0.4
        }
             l 0,${cellPixels * 0.6}
             m -${cellPixels * 0.3},-${cellPixels * 0.3}
             l ${cellPixels * 0.6},0
          "/>
      `);
      }
    }
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

  private svg!: SVGElement;
  private svgChanged(svg?: Element) {
    if (svg instanceof SVGElement) {
      this.svg = svg;
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

  private convertCoordinateToCellNumber(coord: number): number | undefined {
    const {cellSpan, puzzleId} = this;
    if (coord < 0 || !puzzleId || coord >= cellSpan * puzzleId.spec.size) {
      return undefined;
    }
    return Math.floor(coord / cellSpan);
  }

  private cellCenter(cellNumber: number): number {
    return (cellNumber + 0.5) * this.cellSpan;
  }

  private convertPointToLoc(point: {x: number; y: number}): Loc | undefined {
    const rect = this.svg.getBoundingClientRect();
    const locX = (point.x - rect.x) * devicePixelRatio;
    const locY = (point.y - rect.y) * devicePixelRatio;
    const col = this.convertCoordinateToCellNumber(locX);
    const row = this.convertCoordinateToCellNumber(locY);
    if (col === undefined || row === undefined) return undefined;
    const loc = locAt(row, col);
    const dist = Math.hypot(
      locX - this.cellCenter(col),
      locY - this.cellCenter(row)
    );
    return dist <= (this.cellSpan / 2) * 0.9 ? loc : undefined;
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
      this.svg.setPointerCapture(event.pointerId);
    }
  }

  private handlePointerUp(event: PointerEvent) {
    if (!this.shouldInteract()) return;
    this.svg?.releasePointerCapture(event.pointerId);
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
  /** How many nominal pixels are on each side of the grid. */
  @state() private sidePixels = 0;

  private calcMetrics() {
    const rect = this.getBoundingClientRect();
    const {puzzleId} = this;
    if (!puzzleId) return;
    const span = Math.min(rect.width, rect.height);
    const size = puzzleId.spec.size;
    this.cellSpan = (devicePixelRatio * span) / size;
    this.sidePixels = span;
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
