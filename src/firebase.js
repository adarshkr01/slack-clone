import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZAnBLabNQKXMZtNDuh676wOdzzuu3J0U',
  authDomain: 'react-slack-clone-5a541.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-5a541.firebaseio.com',
  projectId: 'react-slack-clone-5a541',
  storageBucket: 'react-slack-clone-5a541.appspot.com',
  messagingSenderId: '265806580041',
  appId: '1:265806580041:web:cd7f5bd67244b1cdb67298',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
