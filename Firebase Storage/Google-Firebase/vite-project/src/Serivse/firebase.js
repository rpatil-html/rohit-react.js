// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIIOpiz7F0CrUEoMCFduervFp0Y__9aYM",
  authDomain: "googale-firebase.firebaseapp.com",
  projectId: "googale-firebase",
  storageBucket: "googale-firebase.appspot.com",
  messagingSenderId: "135450194725",
  appId: "1:135450194725:web:60521a51d1fecc4dfd20cc",
  measurementId: "G-5CP1TP5JF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider =new GoogleAuthProvider();
export const db = getFirestore(app);
