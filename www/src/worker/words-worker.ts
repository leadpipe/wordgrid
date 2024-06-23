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
let wordsLoadTimeMs: number;
const wordsPromise = loadWords();
async function loadWords() {
  const startLoadMs = performance.now();
  const response = await fetch(`words-v${WORDS_VERSION}.txt`);
  const reader = response.body?.getReader();
  const builder = new wasm.WordsBuilder();
  while (true) {
    const result = await reader?.read();
    if (!result || result.done) break;
    builder.addLines(result.value);
  }
  words = builder.build();
  wordsLoadTimeMs = performance.now() - startLoadMs;
}

let gridsMade = 0;
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
    const wordsLoadMs = gridsMade === 0 ? wordsLoadTimeMs : undefined;
    ++gridsMade;
    const startTimeMs = performance.now();
    const cached = actuallyMakeGrid(m);
    const elapsedMs = performance.now() - startTimeMs;
    cache.set(m.seed, cached);
    while (cache.size > MAX_CACHED) {
      const seed = cache.keys().next().value;
      cache.delete(seed);
    }
    answer = {
      ...cached,
      wordsLoadMs,
      elapsedMs,
    };
  }
  return answer;
}

const MAX_CACHED = 100;
const MIN_WORDS = 50;
const cache = new Map<string, GridResultMessage>();

function actuallyMakeGrid(m: MakeGridMessage): GridResultMessage {
  const random = new wasm.JsRandom(m.seed);
  const solvedGrid = new wasm.SolvedGrid(
    words,
    m.size,
    m.minLength,
    MIN_WORDS,
    random
  );
  const map: Map<string, string> = solvedGrid.solution();

  const lines = [];
  const gridString = solvedGrid.gridChars().toUpperCase();
  for (let r = 0; r < m.size; ++r) {
    lines.push(gridString.slice(r * m.size, (r + 1) * m.size));
  }

  const gridWords = new Map<string, wasm.WordCategory>();
  for (const [word, catName] of [...map.entries()].sort()) {
    gridWords.set(
      word.toUpperCase(),
      wasm.WordCategory[catName as keyof typeof wasm.WordCategory]
    );
  }

  random.free();
  solvedGrid.free();

  return {
    type: FromWorkerMessageType.GRID,
    message: m,
    grid: lines,
    words: gridWords,
  };
}
