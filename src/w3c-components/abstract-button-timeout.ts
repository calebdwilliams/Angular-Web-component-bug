export class AbstractButtonTimeout extends HTMLElement {
  _shadowRoot: any;

  static get tagName() { return 'abstract-button-timeout'; }
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    setTimeout(() => {
      this._shadowRoot.innerHTML = `
        <button>${this.innerText}</button>
      `;

      console.dir(this);
    }, 1);
  }

  get innerText() {
    return this.getAttribute('inner-text') || 'failed';
  }
}
