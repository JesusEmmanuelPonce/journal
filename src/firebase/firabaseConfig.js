import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsOSD85XksaFl1vMJ_qeBmtim6m_QKGMc",
    authDomain: "journal-app-eea12.firebaseapp.com",
    projectId: "journal-app-eea12",
    storageBucket: "journal-app-eea12.appspot.com",
    messagingSenderId: "190264564801",
    appId: "1:190264564801:web:4aab4a83d7d6ee37c6fac0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}