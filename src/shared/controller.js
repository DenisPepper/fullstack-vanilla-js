/**
 * @typedef {import('./viewBase.js').default} View
 */

export default class Controller {
  /**
   * @type {View}
   */
  #view;

  /**
   * @param {{ view: View }} args
   */
  constructor({ view }) {
    this.#view = view;
  }

  static init(args) {
    const controller = new Controller(args);
    controller.#initView();
    return controller;
  }

  #initView() {
    const initialData = [
      { name: 'Erick', age: 25, email: 'erick@host.com' },
      { name: 'Robert', age: 32, email: 'robert@host.com' },
      { name: 'Henry', age: 28, email: 'henry@host.com' },
    ];
    this.#view.configureFormSubmit(this.#onSubmit.bind(this));
    this.#view.render(initialData);
  }

  #onSubmit({ name, age, email }) {
    this.#view.render([{ name, age, email }]);
  }
}
