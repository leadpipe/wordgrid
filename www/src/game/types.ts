
/**
 * Our judgement about a given traced word.
 */
 export enum WordJudgement {
  /** The word is too short to have been included in the puzzle's list. */
  TOO_SHORT,
  /** The word is not in the puzzle's list. */
  NOT_A_WORD,
  /** The word is in the puzzle's list, and hasn't previously been found. */
  WORD,
  /** The word is in the puzzle's list, but was already found. */
  DUPLICATE,
  /** The word cannot be made from the grid. */
  IMPOSSIBLE,
}

export interface Counts {
  found: number;
  total: number;
}
