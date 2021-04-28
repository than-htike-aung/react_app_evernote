import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCl9e1VCJBz023YrJqRycFrrUPhEto-2aA",
    authDomain: "note-clone-b2654.firebaseapp.com",
    projectId: "note-clone-b2654",
    storageBucket: "note-clone-b2654.appspot.com",
    messagingSenderId: "533564226671",
    appId: "1:533564226671:web:cdb459d0c48a16dc2b619a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;