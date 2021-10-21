import firebase from 'firebase/compat/app';// Importacion firebase/app como objeto para poderlo usar

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
//import { GoogleAuthProvider } from 'firebase/auth';

// import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyAUQAEAYBOK-POafRI1PWkuF2L69otdndw",
    authDomain: "resume-66f13.firebaseapp.com",
    projectId: "resume-66f13",
    storageBucket: "resume-66f13.appspot.com",
    messagingSenderId: "179902042035",
    appId: "1:179902042035:web:e808af3873a4ff9a6285c6",
    measurementId: "G-D3BZ43RH8X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const googleAuthProvider = new GoogleAuthProvider();
// const facebookAuthProvider = new FacebookAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
// const functions = firebase.functions();

export {
    auth,
    firebase,
    db,
    storage,
    googleAuthProvider,
    facebookAuthProvider
    // functions
}

export default firebaseConfig;