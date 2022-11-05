import * as wasm from 'wordgrid-rust';

export enum ToWorkerMessageType {
  MAKE_GRID = 'MAKE_GRID',
}

export const WORDS_VERSION = 1;

export interface MakeGridMessage {
  readonly type: ToWorkerMessageType.MAKE_GRID;

  /** The version of the words file to use. */
  readonly version: number;

  /** The RNG seed. */
  readonly seed: string;

  /** The size of one side of the square grid. Must be 4, 5, or 6. */
  readonly size: number;

  /** The smallest word length to look for. */
  readonly minLength: number;
}

export type ToWorkerMessage = MakeGridMessage;

export enum FromWorkerMessageType {
  GRID = 'GRID',
  UNKNOWN_VERSION = 'UNKNOWN_VERSION',
}

export type GridWords = ReadonlyMap<string, wasm.WordCategory>;

export interface GridResultMessage {
  readonly type: FromWorkerMessageType.GRID;

  /** The message that this is the result for. */
  readonly message: MakeGridMessage;

  /** The rows of the grid as strings. */
  readonly grid: readonly string[];

  /** The words that appear in the grid, each with its category. */
  readonly words: GridWords;

  /**
   * If present, this was the first puzzle made and loading all the words took
   * this many milliseconds.
   */
  readonly wordsLoadMs?: number;

  /**
   * How long it took the worker to make the grid, in milliseconds.  Absent for
   * previously cached grids.
   */
  readonly elapsedMs?: number;
}

export interface UnknownVersionMessage {
  readonly type: FromWorkerMessageType.UNKNOWN_VERSION;

  /** The message that this is the result for. */
  readonly message: MakeGridMessage;

  /** The words versions that we can honor. */
  readonly versions: Set<number>;
}

export type FromWorkerMessage = GridResultMessage | UnknownVersionMessage;
