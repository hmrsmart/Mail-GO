
import { getToken } from '../services/auth';


export async function getMail() {
  /*const options = {
    authProvider: (window as any).msalInstance, // An instance created from previous step
  };
  const client = Client.initWithMiddleware(options);

  if (client) {
    let mail = await client.api('/me/messages').get();
    console.log(mail.value);

    return mail.value;
  }*/

  console.log('getMail')

  const token = await getToken();
  console.log('token', token);

  const headers = new Headers();
  const bearer = "Bearer " + token;
  headers.append("Authorization", bearer);
  const options = {
    method: "GET",
    headers: headers
  };
  const graphEndpoint = "https://graph.microsoft.com/beta/me/messages";

  const response = await fetch(graphEndpoint, options);
  const data = await response.json();

  console.log('mail', data);

  return data.value;

}

export async function getAnEmail(id: string) {
  /*const options = {
    authProvider: (window as any).msalInstance, // An instance created from previous step
  };
  const client = Client.initWithMiddleware(options);

  if (client) {
    let mail = await client.api(`/me/messages/${id}`).get();
    console.log(mail.value);

    return mail;
  }*/

  const token = await getToken();

  const headers = new Headers();
  const bearer = "Bearer " + token;
  headers.append("Authorization", bearer);
  const options = {
    method: "GET",
    headers: headers
  };
  const graphEndpoint = `https://graph.microsoft.com/beta/me/messages/${id}`;

  const response = await fetch(graphEndpoint, options);
  const data = await response.json();

  console.log(data);

  return data;

}

export async function sendMail(subject: string, body: string, recipients: any[], attachment: File) {
  let sendMail = null;

  if (attachment) {
    console.log('attachment', attachment);
    const reader = new FileReader();

    reader.readAsDataURL(attachment);
    reader.onloadend = async () => {
      let base64String = (reader.result as string)?.replace(/^data:.+;base64,/, '');

      let attachFile = {
        "@odata.type": "#microsoft.graph.fileAttachment",
        "name": attachment.name,
        "contentBytes": base64String
      };

      console.log(attachFile);

      sendMail = {
        "message": {
          "subject": subject,
          "body": {
            "contentType": "Text",
            "content": body
          },
          "toRecipients":
            recipients,
          "attachments": [
            attachFile
          ]
        },
        "saveToSentItems": "true"
      };

      if (sendMail) {
        const token = await getToken();

        const headers = new Headers();
        const bearer = "Bearer " + token;
        headers.append("Authorization", bearer);
        const options = {
          method: "POST",
          headers: {
            'Authorization': bearer,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendMail)
        };
        const graphEndpoint = "https://graph.microsoft.com/beta/me/sendMail";

        try {
          await fetch(graphEndpoint, options);

          URL.revokeObjectURL(base64String);
        }
        catch (err) {
          console.error("error sending message", err);
        }
      }
    }

  }
  else {
    sendMail = {
      "message": {
        "subject": subject,
        "body": {
          "contentType": "Text",
          "content": body
        },
        "toRecipients":
          recipients
      },
      "saveToSentItems": "true"
    };

    if (sendMail) {
      const token = await getToken();

      const headers = new Headers();
      const bearer = "Bearer " + token;
      headers.append("Authorization", bearer);
      const options = {
        method: "POST",
        headers: {
          'Authorization': bearer,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendMail)
      };
      const graphEndpoint = "https://graph.microsoft.com/beta/me/sendMail";

      try {
        await fetch(graphEndpoint, options);
      }
      catch (err) {
        console.error("error sending message", err);
      }
    }
  }
}