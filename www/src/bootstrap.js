// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
import('./index.ts').catch(e =>
  console.error('Error importing `index.ts`:', e)
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
