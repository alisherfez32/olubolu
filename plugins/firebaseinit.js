
import firebase from 'firebase/compat/app'
//import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/messaging'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeSuwlaI5AMWERtX483JutShIls5W_LEk",
  authDomain: "aaltach-7195f.firebaseapp.com",
  projectId: "aaltach-7195f",
  storageBucket: "aaltach-7195f.appspot.com",
  messagingSenderId: "21062928931",
  appId: "1:21062928931:web:1073a32aec7b5c662f7f96",
  measurementId: "G-XH5BLB8S72"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { timestamp }

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebaseApp.firestore()
