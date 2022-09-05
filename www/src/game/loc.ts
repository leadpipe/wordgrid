export interface Loc {
  readonly row: number;
  readonly col: number;
  isAdjacentTo(that: Loc): boolean;
}

class LocImpl implements Loc {
  constructor(readonly row: number, readonly col: number) {}

  /**
   * Tells whether this location is a neighbor (straight or diagonal) of the
   * given location.
   */
  isAdjacentTo(that: Loc): boolean {
    return (
      this !== that &&
      Math.abs(this.row - that.row) <= 1 &&
      Math.abs(this.col - that.col) <= 1
    );
  }
}

// All the Loc objects there are.
const LOCS: Loc[][] = (() => {
  const nums = [0, 1, 2, 3, 4, 5];
  return nums.map(row => nums.map(col => new LocImpl(row, col)));
})();

export function locAt(row: number, col: number): Loc {
  return LOCS[row][col];
}

export function locsForSize(size: number): readonly Loc[] {
  const answer = [];
  for (let row = 0; row < size; ++row) {
    for (let col = 0; col < size; ++col) {
      answer.push(locAt(row, col));
    }
  }
  return answer;
}
