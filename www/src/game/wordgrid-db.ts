import {DBSchema, IDBPDatabase, openDB} from 'idb/with-async-ittr';

/**
 * The object holding the words found for a puzzle when the game is still in
 * progress.  Holds the literal words found, in order, plus the number of them
 * that were found before the timer expired.
 */
export interface WordsInProgress {
  words: string[];
  cutoff: number;
}

/**
 * The object holding the words found for a puzzle when the game is complete.
 * Holds two bitmaps as u8 arrays, one with a 1 bit for each word found before
 * the timer expired and the other for the words found after.  The second one is
 * optional.
 *
 * The second bitmap's bits are from the remaining words not in the first set.
 */
export interface WordsComplete {
  firstBits: Uint8Array;
  secondBits?: Uint8Array;
}

/**
 * Distinguishes between the two kinds of objects used to store the set of words
 * found in a game.
 * @param wordsFound The object stored as the set of words found for a game.
 * @returns True when the words found is a WordsComplete object.
 */
export function isWordsComplete(
  wordsFound: WordsInProgress | WordsComplete
): wordsFound is WordsComplete {
  return typeof (wordsFound as WordsComplete).firstBits === 'object';
}

/**
 * The schema for the `wordgrid` database.
 */
export interface WordgridDb extends DBSchema {
  games: {
    key: string; // The puzzle ID (seed) string.
    value: {
      puzzleId: string;
      lastPlayed: Date;
      elapsedMs: number;
      wordsFound: WordsInProgress | WordsComplete;
    };
    indexes: {
      'by-last-played': Date;
    };
  };

  shares: {
    key: number;
    value: {
      person: string;
      puzzleId: string;
      wordsFound: WordsComplete;
    };
    indexes: {
      'by-person': string;
      'by-puzzle-id': string;
    }
  };
}

/**
 * The type of games within the wordgrid database.
 */
export type GameRecord = WordgridDb['games']['value'];

export function openWordgridDb(): Promise<IDBPDatabase<WordgridDb>> {
  return openDB<WordgridDb>('wordgrid', 1, {
    upgrade(db) {
      const gamesStore = db.createObjectStore('games', {
        keyPath: 'puzzleId',
      });
      gamesStore.createIndex('by-last-played', 'lastPlayed');
      const sharesStore = db.createObjectStore('shares', {
        autoIncrement: true,
      });
      sharesStore.createIndex('by-person', 'person');
      sharesStore.createIndex('by-puzzle-id', 'puzzleId');
    },
  });
}
