// A dependency graph that contains any wasm must all be imported
// asynchronously. This file does the single async import, so
// that no one else needs to worry about it again.
const workerPromise = import('./worker/words-worker.ts').catch(e =>
  console.error('Error importing `words-worker.ts`:', e)
);

self.onmessage = async e => {
  const {handleToWorkerMessage} = await workerPromise;
  handleToWorkerMessage(self, e.data);
};
