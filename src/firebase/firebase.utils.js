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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
  
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit()
}

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;