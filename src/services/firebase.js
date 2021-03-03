import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDezD3qaf8ppsfFFqs-2Qh6c_AooB6-QoA",
    authDomain: "chty-97a48.firebaseapp.com",
    projectId: "chty-97a48",
    storageBucket: "chty-97a48.appspot.com",
    messagingSenderId: "458478496720",
    appId: "1:458478496720:web:ff2563591483e8a39027d5",
    measurementId: "G-E86087EL6N"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth;
  export const db = firebase.database();