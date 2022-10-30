import {SharedGameState} from 'src/game/shared-game-state';
import * as wasm from 'wordgrid-rust';
import {GameState} from '../game/game-state';
import {isWordsComplete, WordsComplete} from '../game/wordgrid-db';
import {renderCount} from './utils';

/**
 * The title to use for sharing.
 */
export const SHARE_TITLE = 'Leadpipe Wordgrid';

/**
 * Makes a new random number generator to use for encoding or decoding the parts
 * of a shared game's URL.
 * @param puzzleSeed The puzzle ID/seed of the shared game.
 * @param name The name of the person doing the sharing.
 * @returns A new JsRandom object seeded with these values.
 */
function makeShareRandom(puzzleSeed: string, name: string) {
  return new wasm.JsRandom(`${puzzleSeed}:${name}`);
}

/**
 * Constructs a URL for sharing the user's found words for a game.
 * @param game The game to share.
 * @param shareAs The name the user is calling themselves.
 * @returns The share URL, or undefined if the game is not complete.
 */
export function makeShareUrl(
  game: GameState,
  shareAs: string
): string | undefined {
  const {wordsToStore} = game;
  if (!isWordsComplete(wordsToStore)) return undefined;
  const random = makeShareRandom(game.puzzleId.seed, shareAs);
  const firstBits = wasm.obfuscate(wordsToStore.firstBits, random);
  let url = `${location.origin}${location.pathname}#share/${
    game.puzzleId.seed
  }/${encodeURIComponent(shareAs)}/${firstBits}`;
  if (wordsToStore.secondBits) {
    url += `/${wasm.obfuscate(wordsToStore.secondBits, random)}`;
  }
  random.free();
  return url;
}

/**
 * Constructs the text to use for sharing the user's found words for a game.
 * There are two basic forms: a first-share and a share-back.  Both start with
 * the user's name and how many points they earned.  First-shares conclude with
 * an exhortation to share back.  Share-backs summarize the results for all
 * users who have shared with this user.
 * @param game The game being shared.
 * @param shareAs The name the user is calling themselves.
 * @param shares The shared game states, for when this is a share-back.
 * @param shareBack Whether this should be a share-back.
 */
export function makeShareText(
  game: GameState,
  shareAs: string,
  shares: SharedGameState[],
  shareBack: boolean
): string {
  const prefix = `${shareAs} earned ${renderCount(game.earnedPoints, 'point')}`;
  if (shareBack) {
    const opponentCount = shares.length - 1;
    let opponents = [];
    for (let i = 1; i <= opponentCount; ++i) {
      const share = shares[i];
      const nameAndKept = `${share.person} (${share.result.kept.points})`;
      if (i === 1 && opponentCount <= 2) {
        opponents.push(nameAndKept);
      } else if (i === opponentCount) {
        opponents.push(`and ${nameAndKept}`);
      } else {
        opponents.push(`${nameAndKept},`);
      }
    }
    return `${prefix}, kept ${
      shares[0].result.kept.points
    } versus ${opponents.join(' ')}.`;
  } else {
    return `${prefix}.  Share back when you've finished!`;
  }
}

/**
 * Reverses the encoding of the person's name that was done by `makeShareUrl`.
 * @param pathParts The path components of the share URL after the puzzle
 * ID/seed.
 * @returns The name of the person who shared the puzzle.
 */
export function decodeShareName(pathParts: string[]) {
  return decodeURIComponent(pathParts[0] ?? '');
}

/**
 * Extracts the bits corresponding to the words found by the person who shared
 * their puzzle result, or throws if the URL was corrupted.
 * @param puzzleSeed The ID/seed of the puzzle that was shared.
 * @param name The name of the person who shared the puzzle.
 * @param pathParts The path components of the share URL after the puzzle
 * ID/seed.
 * @returns The bits corresponding to the words the person found in the puzzle.
 * @throws Error if the share URL was corrupted in some way.
 */
export function decodeShareBits(
  puzzleSeed: string,
  name: string,
  pathParts: string[]
): WordsComplete {
  let wordsShared;
  const random = makeShareRandom(puzzleSeed, name);
  try {
    const firstBits = wasm.deobfuscate(pathParts[1], random);
    const secondBits = pathParts[2]
      ? wasm.deobfuscate(pathParts[2], random)
      : undefined;
    wordsShared = {firstBits, secondBits};
  } finally {
    random.free();
  }
  return wordsShared;
}
