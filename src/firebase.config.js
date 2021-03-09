import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB5aZk25KQkjQBMTGZzjCqstchKR1Y071I",
    authDomain: "reddit-app-9dc12.firebaseapp.com",
    projectId: "reddit-app-9dc12",
    storageBucket: "reddit-app-9dc12.appspot.com",
    messagingSenderId: "473455154080",
    appId: "1:473455154080:web:c4441d9c12c8b6cf198ac5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;