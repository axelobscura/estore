import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAE4lLmzKnPYYSmJLb8k-rm9YMDH5TbB9I",
  authDomain: "crwn-db-14e6c.firebaseapp.com",
  databaseURL: "https://crwn-db-14e6c.firebaseio.com",
  projectId: "crwn-db-14e6c",
  storageBucket: "crwn-db-14e6c.appspot.com",
  messagingSenderId: "336766407059",
  appId: "1:336766407059:web:82df0409e65cb43aaa9866",
  measurementId: "G-28B0KV039F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;