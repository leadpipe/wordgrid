import * as wasm from '../../../crate/pkg/leadpipe_wordgrid';
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

console.log('Loading words...');

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
  console.log(`Loaded ${words.count()} words`);
}

function makeGrid(m: MakeGridMessage): GridResultMessage|UnknownVersionMessage {
  if (m.version !== WORDS_VERSION) {
    return {
      type: FromWorkerMessageType.UNKNOWN_VERSION,
      message: m,
      versions: new Set([WORDS_VERSION]),
    }
  }

  const random = new wasm.JsRandom(m.seed);
  const grid = new wasm.Grid(words, m.size, random);
  const obj = grid.findWords(words, m.minLength);

  const lines = [];
  for (let r = 0; r < grid.size(); ++r) {
    const chars = [];
    for (let c = 0; c < grid.size(); ++c) {
      chars.push(grid.cell(r, c));
    }
    lines.push(chars.join('').toUpperCase());
  }

  const gridWords = new Map<string, wasm.WordCategory>();
  for (const word of Object.keys(obj).sort()) {
    gridWords.set(
      word.toUpperCase(),
      wasm.WordCategory[obj[word]] as unknown as wasm.WordCategory
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
