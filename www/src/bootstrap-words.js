// A dependency graph that contains any wasm must all be imported
// asynchronously. This file does the single async import, so
// that no one else needs to worry about it again.
const workerPromise = import('./worker/words-worker.ts').catch(e =>
  console.error('Error importing `words-worker.ts`:', e)
);

self.onconnect = e => {
  console.log('words worker got connect event');
  const port = e.ports[0];
  port.onmessage = async e => {
    console.log('got a message event', e);
    const {handleToWorkerMessage} = await workerPromise;
    handleToWorkerMessage(port, e.data);
  };
  console.log('words worker port ready to receive');
};
