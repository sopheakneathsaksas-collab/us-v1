importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAbRe0_6vWzRww2_x-1Wa7VWFD5Mt5UC-w",
    authDomain: "us-v1-809bf.firebaseapp.com",
    projectId: "us-v1-809bf",
    storageBucket: "us-v1-809bf.firebasestorage.app",
    messagingSenderId: "980995342390",
    appId: "1:980995342390:web:57ceb92297244a41699897"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "icons/icon-192.png"
    });
});