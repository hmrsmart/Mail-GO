import {
  LitElement,
  css,
  html,
  customElement,
  internalProperty,
} from "lit-element";

declare var webkitSpeechRecognition: any;

@customElement("app-dictate")
export class AppDictate extends LitElement {
  @internalProperty() recog: any | null = null;
  @internalProperty() lines: string[] = [];
  @internalProperty() started: boolean = false;
  @internalProperty() wakeLock: any | null = null;

  static get styles() {
    return css`
      #dictate {
        background: var(--app-color-primary);
      }

      #stop {
        background: red;
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // speech to text
    (window as any).requestIdleCallback(
      async () => {
        //@ts-ignore
        await (import("/workers/speech.js") as any);

        const audioConfig = (window as any).SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        const speechConfig = (window as any).SpeechSDK.SpeechConfig.fromSubscription(
          "94691c9f125a497b917e0c60eeec9197",
          "westus"
        );

        speechConfig.speechRecognitionLanguage = "en-us";

        this.recog = new (window as any).SpeechSDK.SpeechRecognizer(
          speechConfig,
          audioConfig
        );

        console.log(this.recog);

        this.setUpListeners();
      },
      {
        timeout: 2000,
      }
    );
  }

  async dictate() {
    if ("setAppBadge" in navigator) {
      await (navigator as any).setAppBadge();
    }

    this.recog.startContinuousRecognitionAsync();

    this.started = true;

    this.wakeLock = await this.requestWakeLock();

    let event = new CustomEvent("start-text", {
      detail: {
        message: "start",
      },
    });
    this.dispatchEvent(event);
  }

  async stop() {
    this.recog.stopContinuousRecognitionAsync();

    this.started = false;

    if ("setAppBadge" in navigator) {
      await (navigator as any).clearAppBadge();
    }

    if (this.wakeLock) {
      this.wakeLock.release();
    }

    let event = new CustomEvent("done-text", {
      detail: {
        message: "done",
      },
    });
    this.dispatchEvent(event);
  }

  setUpListeners() {
    this.lines = [];

    if (this.recog) {
      this.recog.recognizing = (s?: any, e?: any) => {
        console.log(s);
        console.log(e.result);

        let event = new CustomEvent("thinking-text", {
          detail: {
            messageData: e.result.text,
          },
        });
        this.dispatchEvent(event);

        // this.transcript = e.result.text;
      };

      this.recog.recognized = (s?: any, e?: any) => {
        console.log(s);
        console.log("recognized", e.result.text);

        if (e.result.text && e.result.text.length > 0) {
          this.lines.push(e.result.text);

          let event = new CustomEvent("got-text", {
            detail: {
              messageData: this.lines,
            },
          });
          this.dispatchEvent(event);
        }
      };
    }
  }

  requestWakeLock = async () => {
    if ("wakeLock" in navigator) {
      let wakeLock: any;

      try {
        wakeLock = await (navigator as any).wakeLock.request();

        wakeLock.addEventListener("release", () => {
          console.log("Screen Wake Lock released:", wakeLock.released);
        });

        return wakeLock;
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    }
  };

  render() {
    return html`
      ${this.started === false
        ? html`<fast-button id="dictate" @click="${() => this.dictate()}">
            Dictate

            <ion-icon name="mic-outline"></ion-icon>
          </fast-button>`
        : html`
            <fast-button id="stop" @click="${() => this.stop()}">
              Stop

              <ion-icon name="mic-outline"></ion-icon>
            </fast-button>
          `}
    `;
  }
}
