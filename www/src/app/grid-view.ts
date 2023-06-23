import './events';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ref} from 'lit/directives/ref.js';
import {PuzzleId} from '../game/puzzle-id';
import {Loc, locAt} from '../game/loc';
import {Path} from '../game/paths';
import {GridResultMessage} from '../worker/worker-types';
import {Point, Theme} from './types';
import {sleepMs} from './utils';
import {
  BOTH_THEMES_BORDER,
  DARK_BLUE,
  DARK_BLUE_TRANSPARENT,
  DARK_THEME_TEXT,
  LIGHT_BLUE,
  LIGHT_BLUE_TRANSPARENT,
  LIGHT_THEME_TEXT,
} from './styles';

/** The font for the letters in the grid. */
const FONT = 'Merriweather Sans';
/** The font weight for the letters in the grid. */
const FONT_WEIGHT = 800;

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
        background-color: var(--gf);
      }

      canvas {
        overflow: hidden;
        touch-action: none;
      }
    `,
  ];

  override render() {
    const {sideSpan: sideSize} = this;
    const cssSize = sideSize / devicePixelRatio;
    return html`
      <canvas
        ${ref(this.canvasChanged)}
        width=${sideSize}
        height=${sideSize}
        style="width: ${cssSize}px; height: ${cssSize}px;"
        @pointerenter=${this.handlePointerEnter}
        @pointermove=${this.handlePointerHovering}
        @pointerleave=${this.handlePointerLeave}
        @pointercancel=${this.handlePointerCancel}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
      ></canvas>
    `;
  }

  /** Light or dark mode. */
  @property({reflect: true}) theme: Theme = 'light';

  /** Minimum padding on all 4 sides of the component around the grid. */
  @property({type: Number}) padding = 20;

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

  @property({type: Boolean}) isPaused = true;

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
    if (!this.canvas) return;
    this.calcMetrics();
    await sleepMs(0); // Wait for the re-render to update the size of the canvas before redrawing.
    this.draw();
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

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private canvasChanged(canvas?: Element) {
    if (canvas instanceof HTMLCanvasElement) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d')!;
      this.calcMetrics();
      this.draw();
    }
  }

  private shouldInteract(): boolean {
    return this.isInteractive && !this.isPaused;
  }

  /** The possible input location the pointer last hovered over. */
  private hoverLoc?: Loc;

  /** The current trail of selected locations. */
  private readonly trail: Loc[] = [];

  /**
   * The strings being traced out by the trail.  Normally this is just one
   * string, but in the presence of Qs it will double, following the Q alone on
   * one branch and QU on the other.
   */
  private readonly prefixes: string[] = [];

  private convertCoordinateToCellNumber(coord: number): number | undefined {
    const {sideSpan, puzzleId} = this;
    if (coord < 0 || coord >= sideSpan || !puzzleId) return undefined;
    return Math.floor(coord / (sideSpan / puzzleId.spec.size));
  }

  private convertPointToLoc(point: {x: number; y: number}): Loc | undefined {
    const rect = this.canvas.getBoundingClientRect();
    const locX = (point.x - rect.x) * devicePixelRatio;
    const locY = (point.y - rect.y) * devicePixelRatio;
    const col = this.convertCoordinateToCellNumber(locX);
    const row = this.convertCoordinateToCellNumber(locY);
    if (col === undefined || row === undefined) return undefined;
    const loc = locAt(row, col);
    const [x, y] = this.cellCenter(loc);
    const dist = Math.hypot(locX - x, locY - y);
    return dist <= (this.cellSpan / 2) * 0.9 ? loc : undefined;
  }

  /**
   * If legal, adds the given location to the trail currently being traced, and
   * the letter at that location to the current set of prefixes.
   */
  private pushLoc(loc: Loc | undefined) {
    const {puzzle, trail, prefixes} = this;
    if (!puzzle || !loc) return;
    const index = this.trail.indexOf(loc);
    if (index >= 0) {
      // This location is already in use.  If it's the second-to-last one, undo
      // the last location.
      if (index === trail.length - 2) {
        trail.pop();
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
    trail.push(loc);
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
    this.draw();
  }

  private handlePointerEnter(event: PointerEvent) {
    this.handlePointerHovering(event);
  }

  private handlePointerLeave(_event: PointerEvent) {
    this.hoverLoc = undefined;
    this.draw();
  }

  private handlePointerCancel(event: PointerEvent) {
    this.canvas?.releasePointerCapture(event.pointerId);
    this.dispatchEvent(
      new CustomEvent('words-selected', {detail: {words: []}})
    );
    this.resetPointerInput();
    this.draw();
  }

  private handlePointerDown(event: PointerEvent) {
    if (!this.shouldInteract()) return;
    const loc = this.convertPointToLoc(event);
    if (loc && this.puzzle) {
      this.resetPointerInput(); // Should be unnecessary
      this.pendingKeyboardInput = '';
      this.pushLoc(loc);
      this.hoverLoc = undefined;
      this.canvas.setPointerCapture(event.pointerId);
      this.draw();
    }
  }

  private handlePointerUp(event: PointerEvent) {
    if (!this.shouldInteract()) return;
    this.canvas?.releasePointerCapture(event.pointerId);
    if (this.puzzle) {
      this.dispatchEvent(
        new CustomEvent('words-selected', {detail: {words: [...this.prefixes]}})
      );
    }
    this.resetPointerInput();
    this.draw();
  }

  private resetPointerInput() {
    this.trail.length = 0;
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
    let redraw = false;
    if (changedProperties.has('puzzleId')) {
      reset = true;
      redraw = true;
      this.calcMetrics();
    }
    if (changedProperties.has('puzzle') || changedProperties.has('isPaused')) {
      reset = true;
      redraw = true;
    }
    if (changedProperties.has('externalPath')) {
      reset = false;
      redraw = true;
    }
    if (changedProperties.has('theme')) {
      if (this.canvas) {
        this.updateBackground();
        redraw = true;
      }
    }
    if (reset) {
      this.resetPointerInput();
    }
    if (redraw && this.ctx) {
      this.draw();
    }
  }

  private updateBackground() {}

  /** How many pixels are in one side of the grid. */
  @state() private sideSpan = 0;
  /** How many pixels are on each side of a cell. */
  private _cellSpan = 0;

  get cellSpan(): number {
    return this._cellSpan;
  }

  /**
   * The pixel offsets of cells' centers.  There is one offset for each letter
   * in a side: they are indexed by either row or col.
   */
  private centers: number[] = [];

  readonly cellCenter: (loc: Loc) => Point = (loc: Loc) => {
    const {centers} = this;
    return [centers[loc.col], centers[loc.row]];
  };

  /** The CSS font string for the letters in the grid. */
  private font = FONT;
  /** How far below the center we must position letters within a cell. */
  private textOffset = 0;

  private calcMetrics() {
    const rect = this.getBoundingClientRect();
    const {padding, puzzleId} = this;
    if (!puzzleId) return;
    const size = puzzleId.spec.size;
    let span = Math.min(rect.width, rect.height);
    span -= 2 * padding; // Padding is handled by centering the canvas.
    let sideSpan = devicePixelRatio * span;
    const cellSpan = (this._cellSpan = Math.max(
      0,
      Math.floor((sideSpan - size) / size)
    ));
    this.sideSpan = size * cellSpan;

    const centers = [];
    const half = cellSpan / 2;
    for (let i = 0; i < size; ++i) {
      centers[i] = cellSpan * i + half;
    }
    this.centers = centers;

    if (this.ctx) {
      this.setUpFonts();
    }
  }

  private setUpFonts() {
    const factor = 0.65;
    const size = Math.round(this.cellSpan * factor);
    this.font = `${FONT_WEIGHT} ${size}px ${FONT}`;
    this.textOffset = this.calcTextOffset(this.font);
  }

  private calcTextOffset(font: string): number {
    const {ctx} = this;
    ctx.font = font;
    ctx.textBaseline = 'middle';
    const metrics = ctx.measureText('AZ');
    // Distance from baseline to center of capital letters.
    return Math.round(
      (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2
    );
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

  private draw() {
    const {ctx} = this;
    ctx.setTransform({});
    const {width, height} = ctx.canvas;
    ctx.clearRect(0, 0, width, height);

    this.drawGrid();
    this.drawLetters();
    this.drawTrail();
  }

  private drawGrid() {
    const {cellSpan, hoverLoc, trail, ctx, theme, puzzleId, cellCenter} = this;
    if (!puzzleId) return;
    const radius = cellSpan / 2;
    if (hoverLoc || trail.length) {
      ctx.fillStyle =
        theme === 'light' ? LIGHT_BLUE.cssText : DARK_BLUE.cssText;
      ctx.beginPath();
      const [x, y] = cellCenter(hoverLoc || trail[0]);
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
    ctx.strokeStyle = BOTH_THEMES_BORDER.cssText;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const loc of puzzleId.spec.locs) {
      const [x, y] = cellCenter(loc);
      ctx.moveTo(x + radius, y);
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
    }
    ctx.stroke();
  }

  private drawLetters() {
    const {isPaused, puzzle, puzzleId, ctx, theme, cellCenter, textOffset} =
      this;
    if (!puzzleId) return;
    const grid =
      isPaused || !puzzle ? this.pausedGrid(puzzleId.spec.size) : puzzle.grid;
    if (grid === puzzle?.grid) {
      ctx.fillStyle =
        theme === 'light' ? LIGHT_THEME_TEXT.cssText : DARK_THEME_TEXT.cssText;
    } else {
      ctx.fillStyle = 'orange';
    }
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = this.font;
    for (const loc of puzzleId.spec.locs) {
      let letter = grid[loc.row].charAt(loc.col);
      if (letter === 'Q') letter = 'Qu';
      const [x, y] = cellCenter(loc);
      ctx.fillText(String(letter), x, y + textOffset);
    }
  }

  private drawTrail() {
    const {trail} = this;
    if (!trail.length) return;
    const {ctx, theme, cellSpan, cellCenter} = this;
    ctx.strokeStyle =
      theme === 'light'
        ? LIGHT_BLUE_TRANSPARENT.cssText
        : DARK_BLUE_TRANSPARENT.cssText;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = cellSpan / 6;
    ctx.beginPath();
    ctx.moveTo(...cellCenter(trail[0]));
    for (const loc of trail) {
      ctx.lineTo(...cellCenter(loc));
    }
    ctx.stroke();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-view': GridView;
  }
}
