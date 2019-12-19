import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/analytics';
  
const firebaseConfig = {
    apiKey: "AIzaSyDVkTfQ6RwNDuiVgeGt64OiaMByhwEcAfo",
    authDomain: "stocksystem-22e6b.firebaseapp.com",
    databaseURL: "https://stocksystem-22e6b.firebaseio.com",
    projectId: "stocksystem-22e6b",
    storageBucket: "stocksystem-22e6b.appspot.com",
    messagingSenderId: "17361461859",
    appId: "1:17361461859:web:324ae0e34e44ce19a3ce56",
    measurementId: "G-X94T2M4HXY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();

export default firebase;