import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
        text-transform: uppercase;
        font-style: italic;
        padding: 12px 16px 12px 24px;
        font-weight: bold;
      }

      .link:hover,
      :host([active]) .link {
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }
      
      .link {
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
      }

      .primaryOutlined {
        background-color: #ffffff;
        border: #005fa9;

      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = "https://www.psu.edu/news/research/";
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></span>`;
  }
}
