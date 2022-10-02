import * as wasm from 'wordgrid-rust';
import {
  FromWorkerMessageType,
  GridResultMessage,
  MakeGridMessage,
  ToWorkerMessage,
  ToWorkerMessageType,
  UnknownVersionMessage,
  WORDS_VERSION,
} from './worker-types';

export async function handleToWorkerMessage(
  scope: DedicatedWorkerGlobalScope,
  message: ToWorkerMessage
) {
  switch (message.type) {
    case ToWorkerMessageType.MAKE_GRID:
      await wordsPromise;
      scope.postMessage(makeGrid(message));
      break;
  }
}

let words: wasm.Words;
const wordsPromise = loadWords();
async function loadWords() {
  const response = await fetch(`words-v${WORDS_VERSION}.txt`);
  const reader = response.body?.getReader();
  const builder = new wasm.WordsBuilder();
  while (true) {
    const result = await reader?.read();
    if (!result || result.done) break;
    builder.addLines(result.value);
  }
  words = builder.build();
}

function makeGrid(
  m: MakeGridMessage
): GridResultMessage | UnknownVersionMessage {
  if (m.version !== WORDS_VERSION) {
    return {
      type: FromWorkerMessageType.UNKNOWN_VERSION,
      message: m,
      versions: new Set([WORDS_VERSION]),
    };
  }

  let answer = cache.get(m.seed);
  if (!answer) {
    answer = actuallyMakeGrid(m);
    cache.set(m.seed, answer);
    while (cache.size > MAX_CACHED) {
      const seed = cache.keys().next().value;
      cache.delete(seed);
    }
  }
  return answer;
}

const MAX_CACHED = 100;
const cache = new Map<string, GridResultMessage>();

function actuallyMakeGrid(m: MakeGridMessage): GridResultMessage {
  const random = new wasm.JsRandom(m.seed);
  const grid = new wasm.Grid(words, m.size, random);
  const map: Map<string, string> = grid.findWords(words, m.minLength);

  const lines = [];
  for (let r = 0; r < grid.size(); ++r) {
    const chars = [];
    for (let c = 0; c < grid.size(); ++c) {
      chars.push(grid.cell(r, c));
    }
    lines.push(chars.join('').toUpperCase());
  }

  const gridWords = new Map<string, wasm.WordCategory>();
  for (const [word, catName] of [...map.entries()].sort()) {
    gridWords.set(
      word.toUpperCase(),
      wasm.WordCategory[catName as keyof typeof wasm.WordCategory]
    );
  }

  random.free();
  grid.free();

  return {
    type: FromWorkerMessageType.GRID,
    message: m,
    grid: lines,
    words: gridWords,
  };
}
