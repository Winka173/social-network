// Scripts for firebase and firebase messaging
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDShTf_Naqrf-crKIGHXlV9fQ6-UMOZzbM",
  authDomain: "socialnetwork-520d1.firebaseapp.com",
  projectId: "socialnetwork-520d1",
  storageBucket: "socialnetwork-520d1.appspot.com",
  messagingSenderId: "43267424538",
  appId: "1:43267424538:web:53eb3b028d4bb7a510eca3",
  measurementId: "G-EYD89RP040",
};
// eslint-disable-next-line
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  // eslint-disable-next-line
  self.registration.showNotification(notificationTitle, notificationOptions);
});
