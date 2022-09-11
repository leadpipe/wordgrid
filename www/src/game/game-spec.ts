import * as wasm from '../../../crate/pkg/leadpipe_wordgrid';
import {Loc, locsForSize} from './loc';

/**
 * The parameters of a game.  There are 3 predefined sizes, SMALL, MEDIUM, and
 * LARGE.
 */
export interface GameSpec {
  /**
   * What this size is called.
   */
  readonly name: string;

  /**
   * The size of (one side of) the word grid, ie the number of letters.
   */
  readonly size: number;

  /**
   * The shortest length of words we'll recognize.
   */
  readonly minLength: number;

  /**
   * The amount of time allowed to find words.
   */
  readonly timerMinutes: number;

  /**
   * All the locations in this size of grid, in row major order.
   */
  readonly locs: readonly Loc[];
}

export const SMALL: GameSpec = {
  name: 'Small',
  size: 4,
  minLength: 3,
  timerMinutes: 3,
  locs: locsForSize(4),
};

export const MEDIUM: GameSpec = {
  name: 'Medium',
  size: 5,
  minLength: 4,
  timerMinutes: 3,
  locs: locsForSize(5),
};

export const LARGE: GameSpec = {
  name: 'Large',
  size: 6,
  minLength: 5,
  timerMinutes: 4,
  locs: locsForSize(6),
};

const GAME_SPECS = [SMALL, MEDIUM, LARGE];
const GAME_SPECS_BY_GRID_SIZE = new Map<number, GameSpec>(
  GAME_SPECS.map(gs => [gs.size, gs])
);
const GAME_SPECS_BY_NAME = new Map<string, GameSpec>(
  GAME_SPECS.map(gs => [gs.name.toLowerCase(), gs])
);

/**
 * Tells whether a given number corresponds to the grid size of one of the
 * predefined game specs.
 * @param size The size to check.
 * @returns Whether the given size corresponds with a game spec.
 */
export function isValidGridSize(size: number): boolean {
  return GAME_SPECS_BY_GRID_SIZE.has(size);
}

/**
 * Returns the game spec whose grid size is given.  Throws if there is no such
 * spec.
 * @param size The grid size to fetch the spec for.
 * @returns The spec corresponding to the given grid size.
 * @throws Error if the given grid size doesn't correspond to one of the
 * predefined game specs.
 */
export function gameSpecByGridSize(size: number): GameSpec {
  const answer = GAME_SPECS_BY_GRID_SIZE.get(size);
  if (!answer) throw new Error(`Invalid grid size ${size}`);
  return answer;
}

/**
 * Returns the game spec whose name is given (without regard to letter case).
 * Throws if there is no such spec.
 * @param name The name of the spec to fetch, case-insensitive.
 * @returns The spec with the given name.
 * @throws Error if there is no such spec.
 */
export function gameSpecByName(name: string): GameSpec {
  const answer = GAME_SPECS_BY_NAME.get(name.toLowerCase());
  if (!answer) throw new Error(`Invalid game spec name '${name}'`);
  return answer;
}

/**
 * Uses a given random number generator to choose one of the predefined game
 * specs.
 * @param random The random number generator to use.
 * @returns One of the predefined game specs, according to the random number
 * generator.
 */
export function randomGameSpec(random: wasm.JsRandom): GameSpec {
  return GAME_SPECS[Math.floor(random.range(0, GAME_SPECS.length))];
}
