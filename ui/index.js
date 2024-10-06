import Controller from '../src/shared/controller.js';

const platform = globalThis.window ? 'web' : 'console';

const { default: View } = await import(`./../src/platforms/${platform}/view.js`);

// Factory design pattern`
Controller.init({
  view: new View(),
});
