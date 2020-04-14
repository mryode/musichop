import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAALwWFgsf9oeLDiRRId-8h49m-I9K1n2c',
  authDomain: 'musichop-server.firebaseapp.com',
  databaseURL: 'https://musichop-server.firebaseio.com',
  projectId: 'musichop-server',
  storageBucket: 'musichop-server.appspot.com',
  messagingSenderId: '155666653664',
  appId: '1:155666653664:web:0aac66fe3ec1548f098b85',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// TODO create error handler
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }

  return userRef;
};

export const addCollectionAndDocuments = (collectionKey, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  documentsToAdd.forEach(document => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, document);
  });

  return batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(authProvider);

export default firebase;
