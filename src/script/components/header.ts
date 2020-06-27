import { LitElement, css, html, customElement, property, internalProperty } from 'lit-element';


@customElement('app-header')
export class AppHeader extends LitElement {

  @property({ type: String }) title: string = 'PWA Starter';
  @property({ type: Object }) user: any = null;

  @internalProperty() authed: boolean = false;

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        height: 3.6em;

        position: sticky;
        top: 0;
        background: #ffffff57;
        backdrop-filter: blur(10px);
        z-index: 1;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: normal;
        color: var(--app-color-primary);
      }

      pwa-auth::part(signInButton), #authName {
        background: var(--app-color-primary);
        color: white;
        border: none;
        font-size: 12px;
        font-weight: bold;
        padding: 8px;
        width: 6em;
        text-transform: uppercase;
      }

      #authName {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8em;
        border-radius: 4px;
      }

      span {
        color: white;
        background: var(--app-color-primary);
        padding: 6px;
        border-radius: 20px;
        padding-left: 16px;
        padding-right: 16px;
      }

      @media(prefers-color-scheme: dark) {
        header {
          background: rgba(41, 41, 41, 0.61);
        }

        header h1 {
          color: white;
        }

        header mgt-login {
          --color: white;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    const mgtLogin = this.shadowRoot?.querySelector('mgt-login');
    mgtLogin?.addEventListener('loginCompleted', () => {
      location.reload();
    })
  }

  render() {
    return html`
      <header>
        <h1>Offline Mail</h1>

        <mgt-msal-provider client-id="2d508361-d68e-4da6-8ef1-e36bd3404d57" login-type="redirect"></mgt-msal-provider>
        <mgt-login></mgt-login>
      </header>
    `;
  }
}