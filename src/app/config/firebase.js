import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_1ruCTBL3-_YWL6nhtZxQpc8D57wZB8s",
    authDomain: "react-social-0.firebaseapp.com",
    databaseURL: "https://react-social-0.firebaseio.com",
    projectId: "react-social-0",
    storageBucket: "react-social-0.appspot.com",
    messagingSenderId: "80428674917",
    appId: "1:80428674917:web:b760127a4ba30d01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;