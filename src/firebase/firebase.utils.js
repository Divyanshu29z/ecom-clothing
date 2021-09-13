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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
       await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
       })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;