import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbSSPoDX-WLvc1sWhWwz0O31THgg6UG-A",
  authDomain: "crwn-db-41bdc.firebaseapp.com",
  databaseURL: "https://crwn-db-41bdc.firebaseio.com",
  projectId: "crwn-db-41bdc",
  storageBucket: "crwn-db-41bdc.appspot.com",
  messagingSenderId: "838070472669",
  appId: "1:838070472669:web:2f57447ba8c8190283b034",
  measurementId: "G-T8TSZ9NBG0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
