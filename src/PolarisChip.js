import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      class: { type: String },
      hover: { type: Boolean, reflect: true },
      primaryOutlined: { type: Boolean, reflect: true },
      primaryFilled: { type: Boolean, reflect: true },
      tinted: { type: Boolean, reflect: true },
      lightOutlined: { type: Boolean, reflect: true },
      lightFilled: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 12px 12px 12px 12px;
        text-transform: uppercase;
        font-style: italic;
        padding: 12px 16px 12px 24px;
        font-weight: bold;
      }
      
        .link {
          text-decoration: none;
          padding: 8px 4px;
          border: 2px solid #444;
          color: #444;
          font-size: 16px;
        }

          
          :host([primaryOutlined]) .link { 
            border: 2px solid #005fa9;
            background-color: #fff;
            color: #005fa9;
            padding: 12px 16px 12px 24px;
            text-decoration: none;
          }
          
          :host([primaryOutlined]:hover) .link {
            background-color: #005fa9;
            border: 2px solid #005fa9;
            border-radius: 2px;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
          }
          :host([primaryOutlined]:focus) .link {
            background-color: #005fa9;
            border: 2px solid #005fa9;
            border-radius: 2px;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
          }

          
          :host([primaryFilled]) .link{
            background-color: #005fa9;
            border: 2px solid #005fa9;
            padding: 12px 16px 12px 24px;
            color: #fff;
            border: 2px solid #005fa9;
            text-decoration: none;
          }

          :host([primaryFilled]:hover) .link {
            background-color: #fff;
            border: 2px solid #005fa9;
            border-radius: 2px;
            color: #005fa9;
            cursor: pointer;
            text-decoration: underline;
            text-decoration: none;
          }
    
          :host([primaryFilled]:focus) .link {
            background-color: #fff;
            border: 2px solid #005fa9;
            border-radius: 2px;
            color: #005fa9;
            cursor: pointer;
            text-decoration: underline;
            text-decoration: none;
          }

      
      :host([tinted]) .link {
        background-color: #1e407c;
        border: 2px solid #fff;
        padding: 12px 16px 12px 24px;
        color: #ccf0ff;
        border: 2px solid #fff;
        opacity: 0.7;
        text-decoration: none;
      }
      :host([tinted]:hover) .link {
        background-color: #fff;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: none;
        opacity: 0.7;
      }
      :host([tinted]:focus) .link {
        background-color: #fff;
        border: 2px solid #005fa9;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: none;
        opacity: 0.7;
      }

      :host([lightOutlined]) .link {
        border: 2px solid #fff;
        color: #ccf0ff;
        padding: 12px 16px 12px 24px;
        text-decoration: none;
        background-color: transparent;
      }

      :host([lightOutlined]:hover) .link {
        background-color: #ccf0ff;
        border: 2px solid #ccf0ff;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
        text-decoration: none;
      }

      :host([lightOutlined]:focus) .link {
        background-color: #ccf0ff;
        border: 2px solid #ccf0ff;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
        text-decoration: none;
      }

      :host([lightFilled]) .link{
        border: 2px solid #ccf0ff;
        color: #1e407c;
        padding: 12px 16px 12px 24px;
        text-decoration: none;
        background-color: #ccf0ff;
      }

      :host([lightFilled]:hover) .link {
        background-color: transparent;
        border: 2px solid #ccf0ff;
        color: #ccf0ff;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
        text-decoration: none;
      }

      :host([lightFilled]:focus) .link {
        background-color: transparent;
        border: 2px solid #ccf0ff;
        color: #ccf0ff;
        cursor: pointer;
        text-decoration: underline;
        border-radius: 4px;
        text-decoration: none;
      }
    `;

  }

  constructor() {
    super();
    this.name = '';
    this.link = "https://www.psu.edu/news/research/";
    this.class = '';
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></span>`;
  }
}
