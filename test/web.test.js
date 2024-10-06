import { describe, it, before } from 'node:test';
import Controller from '../src/shared/controller.js';
import View from '../src/platforms/web/view.js';

// замокает window
globalThis.window = {};

function getDocument(mock) {
  // замокает document
  globalThis.document = {
    createElement: mock.fn((name) => ({
      classList: {
        add: mock.fn((name) => {}),
      },
    })),
    querySelector: mock.fn((selector) => ({
      reset: mock.fn(() => {}),
      appendChild: mock.fn((element) => {}),
      addEventListener: mock.fn((name, fn) => {}),
    })),
  };

  return globalThis.document;
}

describe('web app test suite', () => {
  let _controller;

  before(() => {});

  it('Добавит новую строку в таблицу при валидных даных формы', async (context) => {
    const document = getDocument(context.mock);
    Controller.init({
      view: new View(),
    });
    document.querySelector.mock;
  });
});
