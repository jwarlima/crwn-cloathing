import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxr_t5m7IjxOql5V5pwMaDhjesCynDgU0",
  authDomain: "crwn-db-3d19f.firebaseapp.com",
  databaseURL: "https://crwn-db-3d19f.firebaseio.com",
  projectId: "crwn-db-3d19f",
  storageBucket: "crwn-db-3d19f.appspot.com",
  messagingSenderId: "550788795668",
  appId: "1:550788795668:web:c187010eac17781f42c601",
  measurementId: "G-B2FL5KK13G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
