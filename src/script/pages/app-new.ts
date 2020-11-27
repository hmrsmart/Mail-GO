import { LitElement, css, html, customElement, property } from 'lit-element';

import '@dile/dile-toast/dile-toast';

import { getAnEmail, sendMail, reply } from '../services/mail';
import { Router } from '@vaadin/router';

//@ts-ignore
import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";

import '../components/app-contacts';
import '../components/app-drawing';
import '../components/app-camera';
import { del } from 'idb-keyval';


@customElement('app-new')
export class AppNew extends LitElement {

  @property({ type: String }) subject: string = '';
  @property({ type: String }) body: string = '';
  @property({ type: String }) address: string = '';

  @property({ type: Array }) attachments: any = [];
  @property({ type: Boolean }) loading: boolean = false;

  @property() preview: any = null;
  @property() previewContent: any = null;
  @property({ type: Boolean }) textPreview: boolean = false;
  @property() textPreviewContent: string | null = null;

  @property() aiData: any | null = null;

  @property({ type: Boolean }) replying: boolean = false;
  @property() emailReplyTo: any | null = null;

  worker: any | null = null;
  textWorker: any | null = null;

  previewTextList: string[] = [];

  static get styles() {
    return css`

    #replyingHeader {
      margin-top: 0;
      font-size: 1.4em;
    }

    .scrolling {
      height: 90vh;
      overflow-y: scroll;
    }

    #replyEmailSection {
      height: 100%;
      width: 100%;

      border: solid 2px var(--app-color-primary);
      border-radius: 6px;
      background: white;
    }

    #appNewBody::-webkit-scrollbar {
      width: 8px;
      background: #222222;
      border-radius: 4px;
    }

    #textAreaSection {
      display: flex;
      justify-content: space-evenly;
    }

    #textPreview {
      width: 80vw;
      border: solid 1px var(--app-color-secondary);
      margin-left: 2em;
      padding: 0px 1em 1em;
      height: 57.5vh;
      margin-top: 4px;
    }

    #textAreaActions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #aiMessage, #markdownSpan {
      font-size: 10px;
    }

    @media(max-width: 800px) {
      #aiMessage {
        font-size: 10px;
        position: absolute;
        bottom: 2em;
      }

      #previewTextButton {
        display: none;
      }

      #textAreaActions {
        margin-top: 1em;
      }
    }

    #previewActionsBlock {
      display: flex;
      justify-content: flex-end;
    }


    #toxicityReport {
      list-style: none;
      overflow-y: scroll;
      height: 50vh;
    }

    #toxicityReport::-webkit-scrollbar {
      width: 8px;
      background: #222222;
      border-radius: 4px;
    }

    #happyReport {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 2em;
      flex-direction: column;
    }

    #happyReport img {
      height: 8em;
    }

    @media (max-width: 800px) {
      #happyReport {
        text-align: center;
      }

      #happyReport img {
        height: 4em;
      }

      #toxicityReport {
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
    }

    #toxicityReport h4 {
      margin-bottom: 0;
      font-weight: bold;
      font-size: 1.2em;
    }

    #toxicityReport h4.bad {
      color: red;
    }

    fast-progress {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
    }

      #previewBlock, #aiBlock {
        background: #181818e8;
        backdrop-filter: blur(10px);
        position: absolute;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        animation-name: fadeIn;
        animation-duration: 280ms;
      }

      #preview, #aiData {
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

      @media(max-width: 800px) {
        #preview, #aiData {
          inset: 1em;
        }
      }

      #preview img {
        max-height: 76%;
        object-fit: contain;
        width: 100%;
      }

      #previewHeader, #aiBlockHeader {
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
            --background: var(--app-color-primary);
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

          #attachButton, #aiCheck {
            margin-right: 12px;
          }

          #sendButton {
            background: rgb(104, 107, 210);
          }

          #subjectBar {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }

          fast-text-area {
            height: 60vh;
            width: 100%;
          }

          fast-text-area::part(control) {
            height: 60vh;
            width: 100%;
            overflow: hidden;
          }

          #subjectBar fast-text-field {
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
            width: 90%;
          }

          @media(max-width: 800px) {
            #addressBlock #recip.contacts {
              width: 80%;
            }
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
            cursor: pointer;
          }

          #attachedImage:hover {
            animation:  shake 0.3s  ; 
            animation-fill-mode: forwards;
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

          #attachedDoc:hover {
            animation:  shake 0.3s  ; 
            animation-fill-mode: forwards;
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

          #previewActionsBlock fast-button {
            background: red;
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

          @keyframes fadeIn {
            from {
              opacity: 0.2;
            }
        
            to {
              opacity: 1;
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

          @keyframes shake{ 
            0%{ 
              transform: translateX(0) 
            } 
            25%{ 
              transform: translateX(10px); 
            } 
              
            50%{ 
              transform: translateX(-10px); 
            } 
            100%{ 
              transform: translateX(0px); 
            } 
          } 
        `
  }

  async firstUpdated() {
    const search = new URLSearchParams(location.search);
    const id = search.get('id');

    if (id) {
      this.emailReplyTo = await getAnEmail(id);
      console.log('email to reply too', this.emailReplyTo);
      this.address = this.emailReplyTo.sender.emailAddress.address;

      this.replying = true;

      const ell: any = this.shadowRoot?.querySelector("#appNewBody");
      if (ell) {
        ell.classList.toggle("scrolling");
      }
    }

    await this.shareTarget()

    await this.fileHandler();

    (window as any).requestIdleCallback(async () => {
      const underlying = new Worker("/workers/ai.js");

      this.worker = Comlink.wrap(underlying);
      await this.worker?.load();

      const underlying2 = new Worker("/workers/text.js");

      this.textWorker = Comlink.wrap(underlying2);
    },
      {
        timeout: 1000
      })
  }

  async shareTarget() {
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log('file event', event);
      console.log('file event data', event.data);
      const imageBlob = event.data.file;

      if (imageBlob) {
        this.attachments = [imageBlob, ...this.attachments];
      }
    });

  }

  async fileHandler() {
    if ('launchQueue' in window) {
      (window as any).launchQueue.setConsumer(async (launchParams: any) => {
        if (!launchParams.files.length) {
          return;
        }


        const fileHandle = launchParams.files[0];
        console.log('fileHandle', fileHandle);

        const existingPerm = await fileHandle.queryPermission({
          writable: false
        });

        if (existingPerm === "granted") {
          const blob = await fileHandle.getFile();

          this.attachments = [...this.attachments, blob];
        }
        else {
          const request = await fileHandle.requestPermission({
            writable: false
          })

          if (request === "granted") {
            const blob = await fileHandle.getFile();
            console.log(blob);

            this.attachments = [...this.attachments, blob];
          }
        }
      });
    }
  }

  async reply() {
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

    const htmlBody = await this.textWorker.runMarkdown(this.body);
    console.log(htmlBody);

    try {
      if (recip && htmlBody) {
        await reply(this.emailReplyTo.id, htmlBody, recip);

        let toastElement: any = this.shadowRoot?.getElementById('myToast');
        await toastElement?.open('Reply Sent...', 'success');

        this.loading = false;

        await del('shareTargetAttachment');
      }
      else {
        let toastElement: any = this.shadowRoot?.getElementById('myToast');
        await toastElement?.open('Please enter a subject, and a recipient', 'error');

        this.loading = false;
      }
      Router.go("/");
    }
    catch (err) {
      console.error(err);

      let toastElement: any = this.shadowRoot?.getElementById('myToast');
      await toastElement?.open('Error sending email', 'error');

      this.loading = false;
    }
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

    const htmlBody = await this.textWorker.runMarkdown(this.body);
    console.log(htmlBody);

    try {
      if (this.subject && recip && htmlBody) {
        await sendMail(this.subject, htmlBody, recip, this.attachments);

        let toastElement: any = this.shadowRoot?.getElementById('myToast');
        await toastElement?.open('Mail Sent...', 'success');

        this.loading = false;

        await del('shareTargetAttachment');
      }
      else {
        let toastElement: any = this.shadowRoot?.getElementById('myToast');
        await toastElement?.open('Please enter a subject, and a recipient', 'error');

        this.loading = false;
      }
      // Router.go("/");
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

  updateSubject(event: any, updatedSubject?: string) {
    if (updatedSubject) {
      this.subject = updatedSubject;
      return;
    }
    else {
      this.subject = event.target.value;
    }
  }

  async updateBody(event: any) {
    this.body = event.target.value;
  }

  async updatePreview(event: any) {
    if (this.textPreview) {
      const content = event.target.value;

      if (content) {
        this.previewTextList = [...this.previewTextList, content];
      }

      this.doPreviewWork();
    }
  }

  async doPreviewWork() {
    if (this.textPreview && this.previewTextList) {
      while (this.previewTextList.length > 0) {
        if ((navigator as any).scheduling && (navigator as any).scheduling.isInputPending()) {
          console.log('pending');
          setTimeout(this.doPreviewWork);
          return;
        }

        console.log('doing work', this.previewTextList.length);

        const content = this.previewTextList.shift();
        console.log('content', content);

        if (content) {
          this.loading = true;
          this.textPreviewContent = await this.textWorker.runMarkdown(content);
          this.loading = false;
        }
      }
    }
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

  async attachPhoto() {
    const modalElement: any = document.createElement('ion-modal');
    modalElement.component = 'app-camera';
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
    },
    {
      text: 'Take Photo',
      icon: 'camera-outline',
      handler: async () => {
        await actionSheet.dismiss();
        await this.attachPhoto()
      }
    },
    {
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

    const existingPerm = await handle.queryPermission({
      writable: false
    });

    if (existingPerm === "granted") {
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
    }
    else {
      const request = await handle.requestPermission({
        writable: true
      })

      if (request === "granted") {
        const blob = await handle.getFile();
        console.log(blob);

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
      }
    }

    console.log(this.preview);
  }

  close() {
    this.preview = null;
    this.previewContent = null;

    if (this.aiData) {
      this.aiData = null;
    }
  }

  async doAiCheck() {
    this.loading = true;
    this.aiData = await this.worker?.testInput(this.body);
    console.log(this.aiData);

    this.loading = false;

    if (this.aiData === null) {
      let toastElement: any = this.shadowRoot?.getElementById('myToast');
      await toastElement?.open('Your email must have text first', 'error');
    }
  }

  deleteAttach(handle: any) {
    console.log(handle);

    const newAttach = this.attachments.filter((attachment: any) => {
      if (attachment.name !== handle.name) {
        return attachment;
      }
    });
    this.attachments = newAttach;

    this.close();
  }

  openTextPreview() {
    this.textPreview = !this.textPreview;
  }

  async disconnectedCallback() {
    super.disconnectedCallback();

    this.attachments = [];
  }

  render() {
    return html`
        <div id="appNewBody">
          ${this.loading ? html`<fast-progress></fast-progress>` : null}

          ${this.emailReplyTo ? html`<h2 id="replyingHeader">Replying</h2>` : null}
        
          <div id="subjectBar">
            <div id="addressBlock">
              To: <fast-text-field class="contacts" .value="${this.address}"
                @change="${(event: CustomEvent) => this.updateAddress(event)}" type="text" id="recip"
                placeholder="test@email.com"></fast-text-field>
              <app-contacts @got-contacts="${(ev: CustomEvent) => this.handleContacts(ev)}"></app-contacts>
            </div>
        
            ${this.emailReplyTo ? null : html`<fast-text-field @change="${(event: any) => this.updateSubject(event)}" type="text" id="subject"
              placeholder="Subject.."></fast-text-field>`}
          </div>
        
          ${this.preview ? html`<div id="previewBlock">
            <div id="preview">
              <div id="previewHeader">
                <h3>Preview</h3>
        
                <fast-button @click="${() => this.close()}">
                  <ion-icon name="close-outline"></ion-icon>
                </fast-button>
              </div>
              ${this.preview.type.includes("text") ? html`<span>${this.previewContent}</span>` : html`<img
                src="${this.previewContent}">`}
        
              <div id="previewActionsBlock">
                <fast-button @click="${() => this.deleteAttach(this.preview)}">
                  Delete
        
                  <ion-icon name="trash-outline"></ion-icon>
                </fast-button>
              </div>
            </div>
          </div>` : null}
        
          ${this.aiData ? html`<div id="aiBlock">
            <div id="aiData">
              <div id="aiBlockHeader">
                <h3>Toxicity Report</h3>
        
                <fast-button @click="${() => this.close()}">
                  <ion-icon name="close-outline"></ion-icon>
                </fast-button>
              </div>
        
              ${this.aiData.length > 0 ? html`<ul id="toxicityReport">
                ${this.aiData.map((dataPoint: any) => {
      return html`
                <li>
                  <h4 class="bad">${dataPoint.label}</h4>
                  <p>Please remember that your words do affect others.</p>
                </li>
                `
    })}
              </ul>` : html`<div id="happyReport">
                <img src="/assets/robot.svg">
                <h4>Your email sounds good to us!</h4>
        
              </div>`}
        
              <span id="aiMessage">All AI is done locally on your device</span>
            </div>
          </div>` : null
          }
        
          <section id="textAreaSection">
            <fast-text-area @input="${(event: any) => this.updatePreview(event)}"
              @change="${(event: any) => this.updateBody(event)}" placeholder="Content of email...">
            </fast-text-area>
        
            ${this.textPreview ? html`<div id="textPreview"
              .innerHTML="${this.textPreviewContent ? this.textPreviewContent : null}">
        
            </div>` : null}
          </section>
        
          <div id="textAreaActions">
            <span id="markdownSpan">Supports Markdown</span>
        
            <fast-button id="previewTextButton" appearance="lightweight" @click="${() => this.openTextPreview()}">HTML Preview
            </fast-button>
          </div>

          ${this.emailReplyTo ? html`<iframe id="replyEmailSection" .srcdoc="${this.emailReplyTo.body.content}">
          </iframe>` : null}
        
          ${this.attachments.length === 0 ? html`<ion-fab vertical="bottom" horizontal="end">
            <ion-fab-button>
              <ion-icon name="attach-outline"></ion-icon>
            </ion-fab-button>
        
            <ion-fab-list side="top">
              <ion-fab-button @click="${() => this.attachFile()}">
                <ion-icon name="document-outline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button @click="${() => this.attachPhoto()}">
                <ion-icon name="camera-outline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button @click="${() => this.attachDrawing()}">
                <ion-icon name="brush-outline"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>` : null}
        
          <div id="newEmailActions">
            <fast-button @click="${() => this.goBack()}" id="backButton">
              Back
        
              <ion-icon name="chevron-back-outline"></ion-icon>
            </fast-button>
        
            <div id="newEmailSubActions">
        
              <fast-button id="aiCheck" @click="${() => this.doAiCheck()}">
                AI Toxicity Check
        
                <ion-icon name="happy-outline"></ion-icon>
              </fast-button>
        
              ${this.attachments.length === 0 ? html`<fast-button @click="${() => this.presentActionSheet()}" id="attachButton">
                Attach
        
                <ion-icon name="attach-outline"></ion-icon>
              </fast-button>` : null}
        
              ${this.emailReplyTo ? html`<fast-button id="sendButton" @click="${() => this.reply()}">
                Reply
        
                <ion-icon name="mail-outline"></ion-icon>
              </fast-button>` : html`<fast-button id="sendButton" @click="${() => this.send()}">
                Send
        
                <ion-icon name="mail-outline"></ion-icon>
              </fast-button>`}
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