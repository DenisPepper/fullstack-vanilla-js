import ViewBase from './../../shared/viewBase.js';

export default class View extends ViewBase {
  #name = document.querySelector('#name');
  #age = document.querySelector('#age');
  #email = document.querySelector('#email');
  #table = document.querySelector('.flex-table');
  #form = document.querySelector('#form');

  /**
   * Adds a new row of data to the display.
   * This method can be adapted to render data in different ways.
   * @param {FormData} data - The data to add.
   * @returns {void}
   */
  addRow(data) {
    const tableRow = document.createElement('div');
    tableRow.classList.add('flex-table-row');
    tableRow.innerHTML = `
        <div>${data.name}</div>
        <div>${data.age}</div>
        <div>${data.email}</div>
    `;
    this.#table.appendChild(tableRow);
  }

  /**
   * Adds a new row of data to the display.
   * This method can be adapted to render data in different ways.
   * @param {FormData[]} items - The data to add.
   * @returns {void}
   */
  render(items) {
    items.forEach((item) => this.addRow(item));
  }

  /**
   * Configures the form submission behavior.
   * When the form is submitted, the provided callback function is executed with the form data.
   * @param {Function} fn - The callback function to execute on form submission.
   * @returns {void}
   */
  configureFormSubmit(fn) {
    this.#form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const name = this.#name.value;
      const age = this.#age.value;
      const email = this.#email.value;
      fn({ name, age, email });
    });
  }
}
