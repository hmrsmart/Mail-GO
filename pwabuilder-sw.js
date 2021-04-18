importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.1/workbox-sw.js"
);
importScripts(
  "https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js"
);

const syncContent = async () => {
  if (navigator.connection.effectiveType === "4g") {
    const token = await idbKeyval.get("graphToken");

    if (token) {
      const headers = new Headers();
      const bearer = "Bearer " + token;
      headers.append("Authorization", bearer);
      const options = {
        method: "GET",
        headers: headers,
      };
      const graphEndpoint = `https://graph.microsoft.com/beta/me/messages`;

      const response = await fetch(graphEndpoint, options);

      const cache = await caches.open("offline-mail");

      if (cache) {
        const cacheResp = await cache.matchAll(graphEndpoint);
        cacheResp.forEach(async (element, index, array) => {
          await cache.delete(element);
        });

        await navigator.setAppBadge();

        cache.put(graphEndpoint, response);

        if (Notification.permission === "granted") {
          const options = {
            body: "New email was received in the background",
            icon: "/assets/icons/icon_48.png",
            vibrate: [100],
            data: {
              dateOfArrival: Date.now(),
            },
            actions: [
              { action: "open", title: "Open" },
              { action: "close", title: "Close" },
            ],
          };
          await registration.showNotification("New mail available", options);
        }
      }
    }
  }
};

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  ({ url }) =>
    url.href.includes("https://graph.microsoft.com/beta/me/messages"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "offline-mail",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 19 * 60, // 5 minutes
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  "sentEmail",
  {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  }
);

const attachBgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  "attemptedAttach",
  {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  }
);

const unsubBgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  "unsubAttempts",
  {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  }
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("me/sendEmail"),
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("/$value"),
  new workbox.strategies.NetworkOnly({
    plugins: [attachBgSyncPlugin],
  })
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("/unsubscribe"),
  new workbox.strategies.NetworkOnly({
    plugins: [unsubBgSyncPlugin],
  }),
  "POST"
);

self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  const action = event.action;

  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow(
      notification.body.substring(notification.body.indexOf("https"))
    );
    notification.close();
  }
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "mail-sync") {
    event.waitUntil(syncContent());
  }
});

async function shareTargetHandler({ event }) {
  // event.respondWith(Response.redirect("/newEmail"));

  const formData = await event.request.formData();
  const mediaFiles = formData.getAll("file");
  const cache = await caches.open("shareTarget");

  for (const mediaFile of mediaFiles) {
    await cache.put(
      // TODO: Handle scenarios in which mediaFile.name isn't set,
      // or doesn't include a proper extension.
      mediaFile.url,
      new Response(mediaFile.url, {
        headers: {
          "content-length": mediaFile.size,
          "content-type": mediaFile.type,
        },
      })
    );
  }

  return Response.redirect(`/newEmail?name=${mediaFiles[0].url}`, 303);
}

workbox.routing.registerRoute("/attach/file/", shareTargetHandler, "POST");

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("comlink"),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("fast-components"),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("ionic"),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("@pwabuilder"),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  ({ url }) => url.href.includes("/me/drive/recent/"),
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
