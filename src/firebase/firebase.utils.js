import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAD1KCK4yxo7jvgfgPve-qcnOxjuVXxeT4",
    authDomain: "crown-db-e1de2.firebaseapp.com",
    databaseURL: "https://crown-db-e1de2.firebaseio.com",
    projectId: "crown-db-e1de2",
    storageBucket: "crown-db-e1de2.appspot.com",
    messagingSenderId: "943374227773",
    appId: "1:943374227773:web:0c7350790629bf1ce38d54",
    measurementId: "G-EZJQE1BYE6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle  = () => auth.signInWithPopup(provider);

  export default firebase;