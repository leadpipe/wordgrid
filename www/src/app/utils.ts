import {IDBPDatabase} from 'idb';
import {html} from 'lit';
import * as wasm from 'wordgrid-rust';
import {GameState} from '../game/game-state';
import {Counts} from '../game/types';
import {WordgridDb} from '../game/wordgrid-db';
import {noteUsage} from './usage';

export function renderCategory(category: wasm.WordCategory) {
  let result = wasm.WordCategory[category];
  if (result.startsWith('Level')) {
    result = 'Level ' + result.substring(5);
  }
  return result;
}

export function pluralize(noun: string, number: number): string {
  return number === 1 ? noun : `${noun}s`;
}

export function renderCount(count: number, countingWhat: string): string {
  return `${count} ${pluralize(countingWhat, count)}`;
}

export function renderCounts(
  counts: Counts | undefined,
  countingWhat: string
): string {
  if (!counts) return '';
  return `${counts.found} / ${counts.total}
  ${pluralize(countingWhat, counts.total)}
  (${Math.round((counts.found / counts.total) * 100)}%)`;
}

export function renderShortCounts(counts: Counts) {
  return `${counts.found}/${counts.total}`;
}

export function sleepMs(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Gets the compiler to ensure that a value being switched on (or tested using
 * if statements) has had all possible values eliminated.  So if you change your
 * code to allow another value, your call to this function will stop compiling.
 * @param value The value being exhaustively switched on.
 */
export function ensureExhaustiveSwitch(value: never): never {
  throw new Error(value);
}

/**
 * Saves the given game to the database.
 * @param db The indexed database.
 * @param game The game to save.
 */
export async function saveGame(db: IDBPDatabase<WordgridDb>, game: GameState) {
  const lastPlayed = game.lastPlayed || new Date();
  noteUsage();
  await db.put('games', {
    puzzleId: game.puzzleId.seed,
    lastPlayed,
    elapsedMs: game.elapsedMs,
    wordsFound: game.wordsToStore,
    d4: game.d4,
  });
}
