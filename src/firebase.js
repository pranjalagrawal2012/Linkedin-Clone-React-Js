import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCR0-4TpcGRJLOWG7B28jgLxG6iczuEsRU",
  authDomain: "linkedin-clone-yt-249b9.firebaseapp.com",
  projectId: "linkedin-clone-yt-249b9",
  storageBucket: "linkedin-clone-yt-249b9.appspot.com",
  messagingSenderId: "560832118429",
  appId: "1:560832118429:web:719306db477b997a889e74"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};