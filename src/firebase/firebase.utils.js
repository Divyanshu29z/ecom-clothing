import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCcPFwnnIsx3YGdC0z4lR_xr_pxhQVWvGY",
  authDomain: "crwn-db-41858.firebaseapp.com",
  projectId: "crwn-db-41858",
  storageBucket: "crwn-db-41858.appspot.com",
  messagingSenderId: "942251164761",
  appId: "1:942251164761:web:dbada4001567cdd2f31d48",
  measurementId: "G-TXVBKLX50E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;