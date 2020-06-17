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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // checking if user already exists, if the user doesnt exist we still get back an object with id you sent and path
  const userRef = firestore.doc(`users/${userAuth.uid}`); // this is getting the doc ref, from here you can perform crud operations

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
