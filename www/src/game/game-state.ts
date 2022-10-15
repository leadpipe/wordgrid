import * as wasm from 'wordgrid-rust';
import {GridResultMessage} from '../worker/worker-types';
import {Path, PathFinder} from './paths';
import {PuzzleId} from './puzzle-id';
import {SharedGameState} from './shared-game-state';
import {Counts, WordJudgement} from './types';
import {
  GameRecord,
  isWordsComplete,
  ShareRecord,
  WordsComplete,
  WordsInProgress,
} from './wordgrid-db';

/**
 * Maintains the state of the game as it's being played.
 */
export class GameState {
  private readonly found = new Set<string>();
  private readonly reverseFound: string[] = [];
  private readonly categories: readonly wasm.WordCategory[];
  readonly wordsByCategory: ReadonlyMap<
    wasm.WordCategory,
    ReadonlySet<string>
  >;
  private readonly points: Counts;
  /** The points for all the words found before the deadline.s */
  private earnedPointsCache = 0;
  /** Elapsed play time in milliseconds prior to the current period. */
  private priorElapsedMs = 0;
  /** When the current period started, or 0. */
  private resumedTimestamp = 0;
  private numFoundWithinTimeLimit = 0;
  private complete = false;
  private lastPlayedTimestamp = 0;

  constructor(
    readonly puzzleId: PuzzleId,
    readonly puzzle: GridResultMessage,
    priorElapsedMs = 0,
    priorNumFoundWithinTimeLimit = 0,
    previouslyFound: readonly string[] = [],
    complete = false,
    lastPlayed: Date | null = null
  ) {
    const wordsByCategory = new Map<wasm.WordCategory, Set<string>>();
    let totalPoints = 0;
    for (const [word, category] of puzzle.words.entries()) {
      let words = wordsByCategory.get(category);
      if (words === undefined) {
        words = new Set();
        wordsByCategory.set(category, words);
      }
      words.add(word);
      totalPoints += GameState.scoreWord(word);
    }
    this.wordsByCategory = wordsByCategory;
    this.points = {found: 0, total: totalPoints};
    this.categories = [...wordsByCategory.keys()].sort((a, b) => a - b);
    this.priorElapsedMs = priorElapsedMs;
    this.numFoundWithinTimeLimit = priorNumFoundWithinTimeLimit;
    for (const word of previouslyFound) {
      this.addPreviouslyFoundWord(word);
      if (this.found.size <= priorNumFoundWithinTimeLimit) {
        this.earnedPointsCache += GameState.scoreWord(word);
      }
    }
    this.complete = complete;
    this.lastPlayedTimestamp = lastPlayed ? lastPlayed.getTime() : 0;
  }

  static scoreWord(word: string): number {
    switch (word.length) {
      // No variant allows words shorter than 3.
      // These are the "super big boggle" scoring rules.
      case 3:
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 3;
      case 7:
        return 5;
      case 8:
        return 11;
      default:
        return 2 * word.length;
    }
  }

  /**
   * Judges a word's status with respect to the current game state.
   * @param word The word to judge.
   * @param checkPossible Whether to ensure the word is possible to find in the grid.
   * @returns The word's status with respect to the current games state.
   */
  judgeWord(word: string, checkPossible?: boolean): WordJudgement {
    if (this.found.has(word)) {
      return WordJudgement.DUPLICATE;
    }
    if (this.puzzle.words.has(word)) {
      return WordJudgement.WORD;
    }
    if (checkPossible && !this.isPossible(word)) {
      return WordJudgement.IMPOSSIBLE;
    }
    if (word.length < this.puzzleId.spec.minLength) {
      return WordJudgement.TOO_SHORT;
    }
    return WordJudgement.NOT_A_WORD;
  }

  /**
   * Tells whether there is a path of letters through the grid that matches the
   * given word.
   * @param word The word to validate.
   */
  isPossible(word: string): boolean {
    return this.findPaths(word).length > 0;
  }

  private pathFinder: PathFinder | null = null;

  /**
   * Finds all possible paths that trace the given word within the grid.
   * @param word The word to find paths for in the grid.
   */
  findPaths(word: string): readonly Path[] {
    let {pathFinder} = this;
    if (!pathFinder) {
      this.pathFinder = pathFinder = new PathFinder(
        this.puzzleId.spec,
        this.puzzle.grid
      );
    }
    return pathFinder.findPaths(word);
  }

  /**
   * Adds a word to the set of found words, if possible, and returns the word's
   * status, which also tells whether it was possible to add it: when the
   * returned judgement is WORD.
   * @param word The word to add, if possible.
   * @param checkPossible Whether to ensure the word is possible to find in the grid.
   * @returns The word's status with respect to the game state _before_ adding
   * it as found.
   * @throws Error if the game is paused.
   */
  addFoundWord(word: string, checkPossible?: boolean): WordJudgement {
    if (this.isPaused) {
      throw new Error('This game is paused');
    }
    const judgement = this.judgeWord(word, checkPossible);
    if (judgement === WordJudgement.WORD) {
      // Because of this judgement, we know it wasn't already in this.found.
      this.addPreviouslyFoundWord(word);
      if (!this.timeExpired) {
        ++this.numFoundWithinTimeLimit;
        this.earnedPointsCache += GameState.scoreWord(word);
      }
      this.lastPlayedTimestamp = Date.now();
    }
    return judgement;
  }

  private addPreviouslyFoundWord(word: string) {
    this.found.add(word);
    this.reverseFound.unshift(word);
    const points = GameState.scoreWord(word);
    this.points.found += points;
    if (this.found.size === this.puzzle.words.size) {
      // The last one!
      this.markComplete();
    }
  }

  /**
   * Returns the number of words found and the total number of words.
   * @returns The found and total counts.
   */
  getWordCounts(): Counts {
    return {found: this.found.size, total: this.puzzle.words.size};
  }

  /**
   * Returns the number of points scored for words found and the total number of
   * possible points.
   * @returns The found and total points.
   */
  getWordPoints(): Counts {
    return {...this.points};
  }

  /** The number of points accumulated before the timer expired. */
  get earnedPoints(): number {
    return this.earnedPointsCache;
  }

  /**
   * Returns all the categories of words in this puzzle, in order.
   * @returns The categories represented by the words in this puzzle.
   */
  getWordCategories(): readonly wasm.WordCategory[] {
    return this.categories;
  }

  /**
   * Returns all the words marked as found, with the most recently found word
   * first.  You may provide a category, in which case only the words in that
   * category are returned.
   * @param category The category whose found words to return; or all found
   * words if not provided.
   * @returns All the found words, or all the found words in a category.
   */
  getFoundWords(category?: wasm.WordCategory): readonly string[] {
    if (category === undefined) return this.reverseFound;
    return this.reverseFound.filter(
      word => this.puzzle.words.get(word) === category
    );
  }

  /**
   * Converts this game into the form used for games shared with us.
   * @param name The name to use for this user.
   * @returns the shared game state corresponding to this game
   */
  asSharedGameState(name: string): SharedGameState {
    return this.convertToSharedGamesState(name, this.getWordsInProgress());
  }

  /**
   * Converts the given share record to a shared game state.  The record must be
   * for the same puzzle as this game state.
   * @param record The share record to convert to a shared game state.
   * @returns the shared game state corresponding to the given record.
   */
  toSharedGameState(record: ShareRecord): SharedGameState {
    if (record.puzzleId !== this.puzzle.message.seed) {
      throw new Error(
        `Wrong shared game: ${record.puzzleId} instead of ${this.puzzle.message.seed}`
      );
    }
    return this.convertToSharedGamesState(
      record.person,
      GameState.reconstructWords(this.puzzle, record.wordsFound)
    );
  }

  private getWordsInProgress(): WordsInProgress {
    return {
      words: [...this.found],
      cutoff: this.numFoundWithinTimeLimit,
    };
  }

  private convertToSharedGamesState(
    person: string,
    wordsInProgress: WordsInProgress
  ): SharedGameState {
    const before = wordsInProgress.words;
    const after = before.splice(wordsInProgress.cutoff);
    return new SharedGameState(this, person, new Set(before), new Set(after));
  }

  /**
   * Returns all the words in the puzzle.  You may provide a category, in which
   * case only the words in that category are returned.
   * @param category The category whose words to return; or all words if not
   * provided.
   * @returns All the words in the puzzle, or all the words in a category.
   */
  getWords(category?: wasm.WordCategory): readonly string[] {
    if (category === undefined) return [...this.puzzle.words.keys()];
    return [...this.puzzle.words.keys()].filter(
      word => this.puzzle.words.get(word) === category
    );
  }

  /**
   * The number of found words that were found before the nominal time limit for
   * this puzzle.
   */
  get numWordsFoundBeforeTimeLimit(): number {
    return this.numFoundWithinTimeLimit;
  }

  /**
   * Tells whether this game has started.
   */
  get isStarted(): boolean {
    return this.lastPlayedTimestamp > 0;
  }

  /**
   * Tells whether the game is currently paused.  Games always start paused, and
   * only are unpaused with the initial call to `resume`.
   */
  get isPaused(): boolean {
    return this.resumedTimestamp === 0;
  }

  /**
   * Returns the total elapsed time that the game has been played so far, in
   * milliseconds.
   */
  get elapsedMs(): number {
    let answer = this.priorElapsedMs;
    if (this.resumedTimestamp !== 0) {
      answer += Date.now() - this.resumedTimestamp;
    }
    return answer;
  }

  /**
   * Tells whether the timer has expired on this game.
   */
  get timeExpired(): boolean {
    return this.msRemaining === 0;
  }

  /**
   * Returns the number of milliseconds remaining in this game, or 0 if the time
   * has expired.
   */
  get msRemaining(): number {
    return Math.max(
      0,
      this.puzzleId.spec.timerMinutes * 60000 - this.elapsedMs
    );
  }

  /**
   * Tells when the game was last played, meaning a word was added or the game
   * was paused or resumed.  Returns null if the game has not been started yet.
   */
  get lastPlayed(): Date | null {
    return this.lastPlayedTimestamp ? new Date(this.lastPlayedTimestamp) : null;
  }

  /**
   * Resumes (or starts for the first time) the clock for this game, if it was
   * previously paused.  Throws if the game is complete.
   */
  resume() {
    if (this.complete) {
      throw new Error("Can't resume a complete game");
    }
    this.lastPlayedTimestamp = Date.now();
    if (this.isPaused) {
      this.resumedTimestamp = this.lastPlayedTimestamp;
    }
  }

  /**
   * Stops the clock for this game, if it was previously running.
   */
  pause() {
    this.lastPlayedTimestamp = Date.now();
    if (!this.isPaused) {
      this.priorElapsedMs = this.elapsedMs;
      this.resumedTimestamp = 0;
    }
  }

  /**
   * Sets this game as complete.  Pauses it if it wasn't previously paused.
   */
  markComplete() {
    this.pause();
    this.complete = true;
  }

  /**
   * Tells whether this game has been marked complete.
   */
  get isComplete() {
    return this.complete;
  }

  /**
   * Returns the words of the puzzle, in either in-progress or complete form.
   */
  get wordsToStore(): WordsInProgress | WordsComplete {
    if (!this.complete) {
      return this.getWordsInProgress();
    }
    const firstWords = [...this.found];
    const secondWords = firstWords.splice(this.numFoundWithinTimeLimit);
    const firstBits = wordsToBitmap(
      firstWords,
      makeWordToIndex(this.puzzle.words.keys())
    );
    const answer: WordsComplete = {firstBits};
    if (secondWords.length) {
      const reducedUniverse = new Map<string, number>();
      const foundFirst = new Set(firstWords);
      let index = 0;
      for (const word of this.puzzle.words.keys()) {
        if (!foundFirst.has(word)) {
          reducedUniverse.set(word, index++);
        }
      }
      answer.secondBits = wordsToBitmap(secondWords, reducedUniverse);
    }
    return answer;
  }

  static reconstructWords(
    puzzle: GridResultMessage,
    wordsComplete: WordsComplete
  ): WordsInProgress {
    const allWords = [...puzzle.words.keys()];
    const words = bitmapToWords(allWords, wordsComplete.firstBits);
    const cutoff = words.length;
    if (wordsComplete.secondBits) {
      const reducedWords = new Set<string>(allWords);
      for (const word of words) {
        reducedWords.delete(word);
      }
      words.push(...bitmapToWords([...reducedWords], wordsComplete.secondBits));
    }
    return {words, cutoff};
  }

  static fromDbRecord(
    record: GameRecord,
    puzzle: GridResultMessage
  ): GameState {
    let wordsFound = record.wordsFound;
    let complete = false;
    if (isWordsComplete(wordsFound)) {
      wordsFound = GameState.reconstructWords(puzzle, wordsFound);
      complete = true;
    }
    return new GameState(
      PuzzleId.fromSeed(puzzle.message.seed),
      puzzle,
      record.elapsedMs,
      wordsFound.cutoff,
      wordsFound.words,
      complete,
      record.lastPlayed
    );
  }
}

function makeWordToIndex(words: Iterable<string>): ReadonlyMap<string, number> {
  const wordToIndex = new Map<string, number>();
  let index = 0;
  for (const word of words) {
    wordToIndex.set(word, index++);
  }
  return wordToIndex;
}

function wordsToBitmap(
  words: readonly string[],
  wordToIndex: ReadonlyMap<string, number>
): Uint8Array {
  const answer = new Uint8Array(Math.ceil(wordToIndex.size / 8));
  for (const word of words) {
    const universeIndex = wordToIndex.get(word)!;
    const answerIndex = Math.floor(universeIndex / 8);
    const bitIndex = universeIndex & 7;
    answer[answerIndex] |= 1 << bitIndex;
  }
  return answer;
}

function bitmapToWords(words: readonly string[], bits: Uint8Array): string[] {
  const answer = [];
  for (let bitsIndex = 0; bitsIndex < bits.length; ++bitsIndex) {
    const byte = bits[bitsIndex];
    if (!byte) continue;
    for (let bitIndex = 0; bitIndex < 8; ++bitIndex) {
      if (byte & (1 << bitIndex)) {
        answer.push(words[bitsIndex * 8 + bitIndex]);
      }
    }
  }
  return answer;
}
