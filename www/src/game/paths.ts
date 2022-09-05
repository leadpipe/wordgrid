import {GameSpec} from './game-spec';
import {Loc} from './loc';

export interface Path {
  readonly locs: Iterable<Loc>;
}

class PathImpl implements Path {
  locs: Set<Loc>;

  constructor(readonly last: Loc, prevPath?: PathImpl) {
    const locs = new Set(prevPath?.locs);
    locs.add(last);
    this.locs = locs;
  }
}

class LetterPaths {
  readonly paths: PathImpl[] = [];
  constructor(readonly letter: string) {}
}

export class PathFinder {
  private readonly letterLocs = new Map<string, Loc[]>();
  private readonly wordPaths: LetterPaths[] = [];

  constructor(readonly spec: GameSpec, readonly grid: readonly string[]) {
    const {letterLocs} = this;
    for (const loc of spec.locs) {
      const letter = grid[loc.row].charAt(loc.col);
      if (letterLocs.has(letter)) {
        letterLocs.get(letter)!.push(loc);
      } else {
        letterLocs.set(letter, [loc]);
      }
    }
  }

  findPaths(word: string): readonly Path[] {
    const {letterLocs, wordPaths} = this;
    if (wordPaths.length > word.length) {
      wordPaths.length = word.length;
    }
    for (let i = 0; i < word.length; ++i) {
      const letter = word.charAt(i);
      if (i < wordPaths.length && wordPaths[i].letter !== letter) {
        wordPaths.length = i;
      }
      if (i === wordPaths.length) {
        const letterPaths = new LetterPaths(letter);
        wordPaths.push(letterPaths);
        if (i === 0) {
          for (const loc of letterLocs.get(letter) ?? []) {
            letterPaths.paths.push(new PathImpl(loc));
          }
        } else {
          const prevPaths = wordPaths[i - 1].paths;
          for (const loc of letterLocs.get(letter) ?? []) {
            for (const prevPath of prevPaths) {
              if (!prevPath.locs.has(loc) && prevPath.last.isAdjacentTo(loc)) {
                letterPaths.paths.push(new PathImpl(loc, prevPath));
              }
            }
          }
          if (letter === 'U' && word.charAt(i - 1) === 'Q') {
            letterPaths.paths.push(...prevPaths)
          }
        }
      }
    }
    return wordPaths[word.length - 1]?.paths ?? [];
  }
}
