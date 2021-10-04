import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";

const initData = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(initData)
  : firebase.app();

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage().ref();
const messaging = firebase.messaging();

const getToken = async () => {
  try {
    let currentToken = await messaging.getToken({
      vapidKey: process.env.REACT_APP_FIREBASE_WEB_PUSH_CERTIFICATES,
    });
    return currentToken;
  } catch (error) {
    console.log("Token error: ", error);
  }
};

export { auth, db, storage, messaging, getToken };
