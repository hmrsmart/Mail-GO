import { LitElement, css, html, customElement, property } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';
import '@dile/dile-toast/dile-toast';
import { getMail } from '../services/mail';
import { Router } from '@vaadin/router';

import { get } from 'idb-keyval';

@customElement('app-home')
export class AppHome extends LitElement {

  @property({ type: Array }) mail: any[] | null = [];
  @property({ type: Array }) mailCopy: any[] | null = [];

  @property({ type: String }) activeCat: string = 'all';
  @property({ type: Boolean }) loading: boolean = false;

  static get styles() {
    return css`

      fast-progress {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
      }

      #introSpan {
        font-weight: normal;
        font-size: 12px;
        margin-top: 8px;
        color: #6d6d6d;
      }

      fast-menu-item {
        background: #222222;
        margin-bottom: 8px;
      }

      pwa-install {
        position: fixed;
        bottom: 12px;
        left: 16px;
        --install-button-color: var(--app-color-primary) !important;
        display: none;
      }

      #introBlock {
        font-weight: bold;
        text-align: center;
        background: white;
        border-radius: 6px;
        padding: 2em;
        background: rgba(29, 29, 29, 0.78);
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: space-between;
        backdrop-filter: blur(10px);
      }

      #introBlock app-login {
        margin-top: 1em;
      }

      #introBlock img {
        height: 24em;
      }

      ul {
        list-style: none;
        padding: 0;
        margin-bottom: 4em;
      }

      ul li {
        background: #e2e2e2;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 1px;
        padding-bottom: 10px;
        border-radius: 6px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-bottom: 10px;

        backdrop-filter: blur(10px);
        background: #d3d3d3bf;
      }

      ul li:nth-child(-n+14) {
        animation-name: slidein;
        animation-duration: 300ms;
      }

      #filterActions button {
        background-color: transparent;
        border-radius: 0;
        color: grey;
        font-weight: bold;
        font-size: 1em;
        width: 5em;
        cursor: pointer;
        align-items: center;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        padding: 6px;
      }

      #filterActions button.selected {
        border-bottom: solid 2px var(--app-color-primary);
        color: var(--app-color-primary);
      }


      @media (min-width: 1200px) {

        ul li {
          display: flex;
          flex-direction: column;
        }

        ul li #nameBlock {
          flex-grow: 1;
        }

        #introBlock {
          margin-left: 24em;
          margin-right: 24em;
        }
        
      }

      ul li h3 {
        margin-bottom: 5px;
        font-size: 16px;
        margin-top: 10px;
      }

      #actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 22px;
      }

      #actions button, #homeToolbar button {
        background-color: var(--app-color-primary);
      }

      #actions button ion-icon, #homeToolbar button ion-icon {
        margin-left: 6px;
      }

      #nameBlock {
        font-size: 12px;
      }

      .preview {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
      }

      ul li #name {
        color: var(--app-color-primary);
      }

      #homeToolbar {
        position: fixed;
          bottom: 0;
          backdrop-filter: blur(10px);
          left: 0;
          right: 0;
          padding: 8px;
          display: flex;
          justify-content: flex-end;
          background: #ffffff69;
      }

      #homeToolbar button {
        display: flex;
        width: initial;
        justify-content: space-around;
        align-items: center;
        background-color: var(--app-color-secondary);
      }

      #homeToolbar #newEmailButton {
        background: var(--app-color-primary);
        margin-left: 12px;
      }

      #homeToolbar button:hover {
        background: var(--app-color-primary);
      }

      #myToast {
        --dile-toast-success-color: var(--app-color-primary);
        --dile-toast-border-radius: 6px;
      }

      @media(prefers-color-scheme: dark) {
        ul li {
          background: rgba(29, 29, 29, 0.78);
          color: white;
        }

        ul li #name {
          color: white;
        }

        #introBlock {
          color: white;
        }

        #homeToolbar {
          background: rgb(29 29 29 / 78%);
        }
      }

      @media(prefers-color-scheme: light) {
        #introBlock {
          background: white;
        }
      }

      @media(min-width: 1000px) {
        #introBlock {
          margin-left: 16em;
          margin-right: 16em;
        }

        #menuActions {
          display: flex;
          flex-direction: column;
        }

        ul {
          overflow-x: hidden;
          overflow-y: scroll;
          height: 86.5vh;
        }

        ul::-webkit-scrollbar {
          width: 8px;
          background: #222222;
          border-radius: 4px;
        }

        #homeToolbar {
          display: none;
        }

        #mainSection {
          display: grid;
          grid-template-columns: minmax(150px, 22%) 1fr;
        }

        #filterActions {
          display: flex;
          flex-direction: column;
          margin-right: 10px;

          justify-content: space-between;
          height: 88vh;
        }

        #desktopNew {
          background: #686bd2;
          margin-top: 8px;
        }
      }

      @media(min-width: 1300px) {
        #mainSection {
          grid-template-columns: minmax(150px, 18%) 1fr;
        }
      }

      @media(max-width: 1000px) {
        #filterActions {
          display: none;
        }
      }

      @keyframes slidein {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    const synced = await this.checkBackgroundSync();
    console.log('synced', synced);

    if (synced) {
      let mail: any = await get('latestMail');

      if (mail) {
        this.mailCopy = mail;
        this.mail = mail;
      }
    }
    else {
      setTimeout(async () => {
        await this.getSavedAndUpdate();
      }, 400);
    }
  }

  async checkBackgroundSync() {
    console.log('checking sync');
    const registration = await navigator.serviceWorker.getRegistration();

    if (registration) {
      if ('periodicSync' in registration) {
        const tags = await (registration as any).periodicSync.getTags();
        // Only update content if sync isn't set up.
        if (!tags.includes('mail-sync')) {
          return false;
        }
        else {
          return true;
        }
      } else {
        // If periodic background sync isn't supported, always update.
  
        return false;
      }
    }
    else {
      return false;
    }
  }

  async getSavedAndUpdate() {
    console.log('getting mail');
    this.mailCopy = await getMail();
    this.mail = this.mailCopy;

    console.log('this.mail', this.mail);

    sessionStorage.setItem('latestmail', JSON.stringify(this.mail));
  }

  getFocused() {
    this.loading = true;

    let focused: any[] = [];

    this.mailCopy?.forEach((mail) => {
      if (mail.inferenceClassification === 'focused') {
        focused.push(mail);
      }
    });

    if (focused.length > 1) {
      this.mail = [...focused];
    }

    this.loading = false;
  }

  getOther() {
    this.loading = true;

    let other: any[] = [];

    this.mailCopy?.forEach((mail) => {
      if (mail.inferenceClassification === 'other') {
        other.push(mail);
      }
    });

    if (other.length > 1) {
      this.mail = [...other];
    }

    this.loading = false;
  }

  async read(id: string) {
    Router.go(`/email?id=${id}`);
  }

  async newEmail() {
    Router.go("/newEmail");
  }

  async refresh() {
    this.loading = true;

    const newMail = await getMail();

    this.loading = false;

    this.mail = [...newMail];

    let toastElement: any = this.shadowRoot?.getElementById('myToast');
    toastElement?.open('Inbox Refreshed...', 'success');
  }

  setCat(cat: string) {
    this.activeCat = cat;

    if (cat === 'focused') {
      this.getFocused();
    }
    else if (cat === 'other') {
      this.getOther()
    }
    else if (cat === 'all') {
      this.getSavedAndUpdate();
    }
  }

  render() {
    return html`
      <div>

      ${this.loading ? html`<fast-progress></fast-progress>` : null}

        ${this.mail && this.mail.length > 0 ? html`

          <section id="mainSection">
            <div id="filterActions">

              <div>
                <h3>Filters</h3>
                <fast-menu-item @click="${() => this.setCat('all')}">All</fast-menu-item>
                <fast-menu-item @click="${() => this.setCat('focused')}">Focused</fast-menu-item>
                <fast-menu-item @click="${() => this.setCat('other')}">Other</fast-menu-item>
              </div>

              <div id="menuActions">
                <fast-button @click="${() => this.refresh()}">
                  Refresh
                  <ion-icon name="reload"></ion-icon>
                </fast-button>
          
                <fast-button id="desktopNew" @click="${() => this.newEmail()}">
                  New Email
                  <ion-icon name="add"></ion-icon>
                </fast-button>
              </div>
            </div>
          
            <ul>
              ${this.mail?.map((email) => {
      return html`
                    <li>

                      <div>
                        <h3>${email.subject}</h3>

                        <p class="preview">
                          ${email.bodyPreview}
                        </p>
                      </div>
                    
                      <div id="actions">
                        <span id="nameBlock">from <span id="name">${email.from.emailAddress.name}</span></span>
                        <fast-button @click="${() => this.read(email.id)}">Read</fast-button>
                      </div>
                    </li>
                  `
    })}
            </ul> 
          </section>

        <div id="homeToolbar">
          <fast-button @click="${() => this.refresh()}">
            Refresh
            <ion-icon name="reload"></ion-icon>
          </fast-button>

          <fast-button id="newEmailButton" @click="${() => this.newEmail()}">
            New Email
            <ion-icon name="add"></ion-icon>
          </fast-button>
        </div>
        
        ` : html`<div id="introBlock">
        Sign in to quickly access your latest email and save them for offline use!

        <span id="introSpan">Powered by the Microsoft Graph.</span>

        <app-login></app-login>
      </div>`}

        <pwa-install>Install Offline Mail</pwa-install>

        <dile-toast id="myToast" duration="3000"></dile-toast>
      </div>


    `;
  }
}