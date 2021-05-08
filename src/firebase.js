// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkui8d6FN2xJdp1HkXUDVbB1lPEcKbU_s",
    authDomain: "webstore-8a8af.firebaseapp.com",
    projectId: "webstore-8a8af",
    storageBucket: "webstore-8a8af.appspot.com",
    messagingSenderId: "805916347100",
    appId: "1:805916347100:web:d8a3679ec705cf3ef08219",
    measurementId: "G-8KCGTTV0BR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };