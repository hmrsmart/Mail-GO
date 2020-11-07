import { LitElement, css, html, customElement, property } from 'lit-element';

import { classMap } from 'lit-html/directives/class-map';

import '@dile/dile-toast/dile-toast';

import { sendMail } from '../services/mail';
import { Router } from '@vaadin/router';

import '../components/app-contacts';
import '../components/app-drawing';


@customElement('app-new')
export class AppNew extends LitElement {

  @property({ type: String }) subject: string = '';
  @property({ type: String }) body: string = '';
  @property({ type: String }) address: string = '';

  @property({ type: Array }) attachments: any = [];
  @property({ type: Boolean }) loading: boolean = false;

  @property() preview: any = null;
  @property() previewContent: any = null;

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

      #previewBlock {
        background: #181818e8;
        backdrop-filter: blur(10px);
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
      }

      #preview {
        background: var(--background-color);
        position: absolute;
        top: 8em;
        z-index: 9999;
        bottom: 8em;
        left: 8em;
        right: 8em;
        border-radius: 4px;

        padding: 1em 2em;
      }

      #preview img {
        max-height: 85%;
        object-fit: contain;
        width: 100%;
      }

      #previewHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1em;
      }

        #newEmailActions {
            position: fixed;
              bottom: 0;
              backdrop-filter: blur(10px);
              left: 0;
              right: 0;
              padding: 12px;
              display: flex;
              
              justify-content: space-between;
              align-items: center;
              background: #ffffff69;
          }

          ion-fab {
            bottom: 5em;
          }

          ion-fab ion-fab-button {
            --background: var(--app-color-secondary);
            --color: white;
          }

          #newEmailActions #newEmailSubActions {
            display: flex;
          }
    
          #newEmailActions button {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: var(--app-color-primary);
            color: white;
            border: none;
            font-weight: bold;
            font-size: 1em;
            padding: 6px;
            border-radius: 6px;
            min-width: 5em;
            cursor: pointer;
          }

          #attachButton {
            margin-right: 12px;
          }
          
          #attachButton {
            margin-right: 12px;
          }

          #sendButton {
            background-color: var(--app-color-secondary) !important;
          }

          #subjectBar {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }

          textarea {
            height: 60vh;
            width: 100%;
          }

          #subjectBar input {
            border: solid 2px var(--app-color-primary);
            border-radius: 6px;
            padding: 8px;
            margin-bottom: 6px;
          }

          #addressBlock {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          #addressBlock #recip {
            width: 100%;
          }

          #addressBlock #recip.contacts {
            width: 82%;
          }

          #attachmentsBlock {
            position: fixed;
            width: 100%;
            bottom: 60px;
            left: 0;
            right: 0;
            padding-bottom: 10px;
          }

          #attachmentsList {
            margin: 0;
            padding: 0;
            display: flex;
            overflow-x: scroll;
          }

          #attachmentsList::-webkit-scrollbar {
            display: none;
          }

          #attachedImage {
            display: flex;
            justify-content: space-between;
            align-items: center;
            bottom: 3.4em;
            background: #686bd2;
            color: white;
            object-fit: contain;
            animation-name: slideinleft;
            animation-duration: 300ms;
            max-height: 3em;
            margin-left: 12px;
            border-radius: 4px;
          }

          #attachedDoc {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #2b2b2b;
            padding: 8px;
            margin-left: 16px;
            border-radius: 4px;
          }

          #drawingButton {
            position: absolute;
            bottom: 4em;
            right: 16px;
            background: var(--app-color-secondary);
            color: white;
            color: white;
            font-weight: bold;
            font-size: 1em;
            min-width: 5em;
            cursor: pointer;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;
            padding: 6px;
            border-radius: 6px;
          }

          h2 {
            font-size: 2em;
          }

          #newEmailActions #attachButton {
            display: none;
          }

          @media (min-width: 800px) {
            #attachedImage {
              border-radius: 6px;
              right: initial;
              left: 16px;
              bottom: 4em;
            }

            ion-fab {
              display: none;
            }

            #newEmailActions #attachButton {
              display: block;
            }

            #attachedImage img {
              border-radius: 6px;
            }
          }

          @media(prefers-color-scheme: dark) {
              #newEmailActions {
                background: rgb(29 29 29 / 78%);
              }

              h2 {
                color: white;
              }
          }

          @keyframes slideinleft {
            from {
              transform: translateX(-20px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `
  }

  async send() {
    this.loading = true;

    let addresses = this.address.split(",");
    console.log(addresses);

    let recip: any[] = [];

    addresses.forEach((address) => {
      recip.push({
        emailAddress: {
          address: address.trim()
        }
      })
    });

    try {
      await sendMail(this.subject, this.body, recip, this.attachments);

      let toastElement: any = this.shadowRoot?.getElementById('myToast');
      await toastElement?.open('Mail Sent...', 'success');

      this.loading = false;

      Router.go("/");
    }
    catch (err) {
      console.error(err);

      let toastElement: any = this.shadowRoot?.getElementById('myToast');
      await toastElement?.open('Error sending email', 'error');

      this.loading = false;
    }
  }

  goBack() {
    Router.go("/");
  }

  updateSubject(event: any) {
    this.subject = event.target.value;
  }

  updateBody(event: any) {
    this.body = event.target.value;
  }

  updateAddress(event: any) {
    this.address = event.target.value;
  }

  handleContacts(ev: CustomEvent) {
    let recip: any[] = [];

    ev.detail.data.forEach((address: any) => {
      recip.push({
        emailAddress: {
          address: address.trim()
        }
      })
    });

    console.log(recip);

    if (this.address.length > 0) {
      this.address = this.address + ',' + recip[0].emailAddress.address;
    }
    else {
      this.address = recip[0].emailAddress.address;
    }
  }

  async attachFile() {
    const module = await import('browser-nativefs');

    const blob = await module.fileOpen({
      mimeTypes: ['image/*', 'text/*'],
    });

    console.log(blob);

    this.attachments = [...this.attachments, blob];
  }

  async attachDrawing() {
    const modalElement: any = document.createElement('ion-modal');
    modalElement.component = 'app-drawing';
    modalElement.showBackdrop = false;

    // present the modal
    document.body.appendChild(modalElement);
    modalElement.present();

    const data = await modalElement.onDidDismiss();
    console.log(data);

    this.attachments = [...this.attachments, data.data.data];
  }

  async presentActionSheet() {
    const actionSheet: any = document.createElement('ion-action-sheet');

    actionSheet.header = 'Attach';
    actionSheet.cssClass = 'my-custom-class';
    actionSheet.buttons = [{
      text: 'Attach File',
      icon: 'document-outline',
      handler: async () => {
        await actionSheet.dismiss();

        await this.attachFile();
      }
    }, {
      text: 'Attach Drawing',
      icon: 'brush-outline',
      handler: async () => {
        await actionSheet.dismiss();

        await this.attachDrawing();
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }];
    document.body.appendChild(actionSheet);
    return actionSheet.present();
  }

  async openFile(handle: any) {
    const file = await handle.getFile();
    console.log(file);

    if (file.type.includes('text')) {
      this.preview = file;
      this.previewContent = await file.text();
    }
    else {
      this.preview = file;
      this.previewContent = URL.createObjectURL(file);
    }

    console.log(this.preview);
  }

  close() {
    this.preview = null;
    this.previewContent = null;
  }

  render() {
    return html`
        <div>
        ${this.loading ? html`<fast-progress></fast-progress>` : null}

          <div id="subjectBar">
            <div id="addressBlock">
              <input class=${classMap({ "contacts": 'contacts' in navigator && 'ContactsManager' in window })}
                .value="${this.address}" @change="${(event: CustomEvent) => this.updateAddress(event)}" type="text" id="recip"
                placeholder="test@email.com">
              <app-contacts @got-contacts="${(ev: CustomEvent) => this.handleContacts(ev)}"></app-contacts>
            </div>
        
            <input @change="${(event: any) => this.updateSubject(event)}" type="text" id="subject" placeholder="Subject..">
          </div>

          ${this.preview ? html`<div id="previewBlock">
            <div id="preview">
              <div id="previewHeader">
                <h3>Preview</h3>

                <fast-button @click="${() => this.close()}">
                  <ion-icon name="close-outline"></ion-icon>
                </fast-button>
              </div>
              ${this.preview.type.includes("text") ? html`<span>${this.previewContent}</span>` : html`<img src="${this.previewContent}">`}
            </div>
          </div>` : null}
        
          <textarea @change="${(event: any) => this.updateBody(event)}" placeholder="Content of email..."></textarea>
        
          <ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button>
              <ion-icon name="attach-outline"></ion-icon>
            </ion-fab-button>
        
            <ion-fab-list side="top">
              <ion-fab-button @click="${() => this.attachFile()}">
                <ion-icon name="document-outline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button @click="${() => this.attachDrawing()}">
                <ion-icon name="brush-outline"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        
          <div id="newEmailActions">
            <fast-button @click="${() => this.goBack()}" id="backButton">
              Back
        
              <ion-icon name="chevron-back-outline"></ion-icon>
            </fast-button>
        
            <div id="newEmailSubActions">
        
              <fast-button @click="${() => this.presentActionSheet()}" id="attachButton">
                Attach
        
                <ion-icon name="attach-outline"></ion-icon>
              </fast-button>
        
              <fast-button id="sendButton" @click="${() => this.send()}">
                Send
        
                <ion-icon name="mail-outline"></ion-icon>
              </fast-button>
            </div>
          </div>
        
          ${this.attachments.length > 0 ? html`<div id="attachmentsBlock">
            <ul id="attachmentsList">
              ${this.attachments.map((attachment: any) => {
                if (attachment.type.includes('image')) {
                  return html`
                    <img @click=${() => this.openFile(attachment.handle)} id="attachedImage" src=${URL.createObjectURL(attachment)}>
                  `
                }
                else {
                  return html`
                    <span @click=${() => this.openFile(attachment.handle)} id="attachedDoc">${attachment.name}</span>
                  `
                }
              })
            }
            </ul>
          </div>` : null}
        </div>
        
        <dile-toast id="myToast" duration="3000"></dile-toast>
    `
  }
}