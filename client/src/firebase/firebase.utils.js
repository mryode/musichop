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

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(authProvider);

export default firebase;
