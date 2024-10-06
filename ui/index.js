const platform = globalThis.window ? 'web' : 'console';

await import(`./../src/platforms/${platform}/view.js`);
