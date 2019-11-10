import firebase from 'firebase/app';
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCv5pXkb9VztTz2iUtkUg9l_v04uXyfbI",
    authDomain: "fcc-drummachine.firebaseapp.com",
    databaseURL: "https://fcc-drummachine.firebaseio.com",
    projectId: "fcc-drummachine",
    storageBucket: "fcc-drummachine.appspot.com",
    messagingSenderId: "350607286968",
    appId: "1:350607286968:web:6379df80c3e5b6bda08a4d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default}