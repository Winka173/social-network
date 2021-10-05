// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js");
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// eslint-disable-next-line
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line
if (firebase.messaging.isSupported()) {
  // eslint-disable-next-line
  firebase.messaging();
}
