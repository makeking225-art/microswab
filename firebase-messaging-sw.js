importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBdF5IFp9MblVQ2GUvE2NC8TsgTpVuT7dM",
  authDomain: "vs-code-d4d6b.firebaseapp.com",
  projectId: "vs-code-d4d6b",
  storageBucket: "vs-code-d4d6b.appspot.com",
  messagingSenderId: "1012283563694",
  appId: "1:1012283563694:web:f25cfd82e9f762f617d73f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon.png",
    data: { url: "https://microswab.netlify.app/home.html" } // link when clicked
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});