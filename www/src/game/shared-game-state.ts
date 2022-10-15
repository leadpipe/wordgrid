import * as wasm from 'wordgrid-rust';
import {GameState} from './game-state';
import {Counts} from './types';

interface PartialGameResult {
  words: number;
  points: number;
}

interface SharedGameResult {
  kept: PartialGameResult;
  lost: PartialGameResult;
}

/**
 * Holds the state of a complete game, such as those shared with us.
 */
export class SharedGameState {
  constructor(
    /** Our game. */
    private readonly game: GameState,
    /** The name of the person who shared the game. */
    readonly person: string,
    /** The words found before the timer went off. */
    readonly before: ReadonlySet<string>,
    /** The words found after the timer went off. */
    readonly after: ReadonlySet<string>
  ) {}

  /**
   * This player's result within the set of shared games.  Counts each "before"
   * word as either kept or lost, depending on whether it is in the set of words
   * that exactly one player found before the timer went off.
   */
  result!: Readonly<SharedGameResult>;
  setUniqueWords(uniqueWords: ReadonlySet<string>) {
    const result = {kept: {words: 0, points: 0}, lost: {words: 0, points: 0}};
    for (const word of this.before) {
      const partial = uniqueWords.has(word) ? result.kept : result.lost;
      ++partial.words;
      partial.points += GameState.scoreWord(word);
    }
    this.result = result;
  }

  /**
   * Returns the total number of words in one of the categories, and the number
   * of words that this person found.
   * @param cat The category whose found words to count.
   * @returns The total number of words in the category, and the number of words
   * found.
   */
  getWordCounts(cat: wasm.WordCategory): Counts {
    const catWords = this.game.wordsByCategory.get(cat) ?? new Set();
    return {
      total: catWords.size,
      found:
        countIntersection(catWords, this.before) +
        countIntersection(catWords, this.after),
    };
  }
}

function countIntersection(
  a: ReadonlySet<string>,
  b: ReadonlySet<string>
): number {
  if (a.size > b.size) {
    [a, b] = [b, a];
  }
  let count = 0;
  for (const word of a) {
    if (b.has(word)) {
      ++count;
    }
  }
  return count;
}
