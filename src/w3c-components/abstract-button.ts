export class AbstractButton extends HTMLElement {
  _shadowRoot: any;

  static get tagName() { return 'abstract-button'; }
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
      <button>${this.innerText}</button>
    `;

    console.dir(this);
  }

  get innerText() {
    return this.getAttribute('inner-text') || 'failed';
  }
}
