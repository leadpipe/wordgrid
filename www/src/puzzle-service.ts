import {EventType, logEvent} from './analytics';
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
  logEvent(EventType.SYSTEM, {
    category: 'words worker error',
    detail: String(e),
  });
};
interface PendingGrid {
  readonly message: MakeGridMessage;
  resolve(result: GridResultMessage): void;
  reject(message: string): void;
}
const pendingGrids: PendingGrid[] = [];
wordsWorker.onmessage = (e: MessageEvent<FromWorkerMessage>) => {
  if (!pendingGrids.length) {
    logEvent(EventType.SYSTEM, {
      category: 'words worker unexpected message',
      detail: JSON.stringify(e),
    });
    return;
  }
  const pendingGrid = pendingGrids.shift();
  sendNextRequest();
  if (e.data.message.seed !== pendingGrid?.message.seed) {
    logEvent(EventType.SYSTEM, {
      category: 'words worker wrong puzzle received',
      detail: `${JSON.stringify(e.data.message)} instead of ${JSON.stringify(
        pendingGrid?.message
      )}`,
    });
    return;
  }
  switch (e.data.type) {
    case FromWorkerMessageType.GRID:
      if (e.data.wordsLoadMs !== undefined) {
        logEvent(EventType.SYSTEM, {
          category: 'words worker load-words time',
          elapsedMs: e.data.wordsLoadMs,
        });
      }
      if (e.data.elapsedMs !== undefined) {
        logEvent(EventType.SYSTEM, {
          category: 'words worker make-grid time',
          detail: e.data.message.seed,
          elapsedMs: e.data.elapsedMs,
        });
      }
      pendingGrid.resolve(e.data);
      break;
    case FromWorkerMessageType.UNKNOWN_VERSION:
      logEvent(EventType.SYSTEM, {
        category: 'words worker unknown version',
        detail: `${e.data.message.version} vs ${e.data.versions}`,
      });
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
