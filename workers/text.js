importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
importScripts("https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.5/marked.min.js");

const textWorker = {
    async runMarkdown(data) {
        const formatted = marked(data);
        return formatted;
    }
}

Comlink.expose(textWorker);