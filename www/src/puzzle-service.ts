import {PuzzleId} from './game/puzzle-id';
import {
  FromWorkerMessage,
  FromWorkerMessageType,
  GridResultMessage,
  MakeGridMessage,
} from './worker/worker-types';

/**
 * The web worker that holds the trie and generates grids.  Note that webpack
 * sees this code and handles it specially.
 */
const wordsWorker = new Worker(
  /* webpackChunkName: 'words' */ new URL(
    'bootstrap-words.js',
    import.meta.url
  ),
  {name: 'words'}
);
wordsWorker.onerror = (e: ErrorEvent) => {
  console.log(`Error on the words worker:`, e);
};
interface PendingGrid {
  readonly message: MakeGridMessage;
  resolve(result: GridResultMessage): void;
  reject(message: string): void;
}
const pendingGrids: PendingGrid[] = [];
wordsWorker.onmessage = (e: MessageEvent<FromWorkerMessage>) => {
  if (!pendingGrids.length) {
    console.log('Unexpected message from the words worker');
    return;
  }
  const pendingGrid = pendingGrids.shift();
  sendNextRequest();
  if (e.data.message.seed !== pendingGrid?.message.seed) {
    console.log(
      `Expected to hear about ${pendingGrid?.message.seed}, instead got`,
      e.data
    );
    return;
  }
  switch (e.data.type) {
    case FromWorkerMessageType.GRID:
      pendingGrid.resolve(e.data);
      break;
    case FromWorkerMessageType.UNKNOWN_VERSION:
      pendingGrid.reject(
        `The words worker can't honor the version we asked for, ${e.data.message.version}`
      );
      break;
  }
};

export function requestPuzzle(puzzleId: PuzzleId): Promise<GridResultMessage> {
  return new Promise((resolve, reject) => {
    pendingGrids.push({message: puzzleId.toMakeGridMessage(), resolve, reject});
    if (pendingGrids.length === 1) {
      sendNextRequest();
    }
  });
}

function sendNextRequest() {
  if (pendingGrids.length) {
    wordsWorker.postMessage(pendingGrids[0].message);
  }
}
