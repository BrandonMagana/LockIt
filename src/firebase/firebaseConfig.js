import firebase from "@firebase/app";

import "@firebase/database";
import "@firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA5Ok0ZAenmcds4H8BsoOtii0chhavTDNY",
  authDomain: "lockit-a8bd0.firebaseapp.com",
  databaseURL: "https://lockit-a8bd0-default-rtdb.firebaseio.com",
  projectId: "lockit-a8bd0",
  storageBucket: "lockit-a8bd0.appspot.com",
  messagingSenderId: "73690065350",
  appId: "1:73690065350:web:f220a5b1ddf2c3ec56eac7",
});

const auth = firebase.auth();
const db = firebase.database();

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export { auth, db };
