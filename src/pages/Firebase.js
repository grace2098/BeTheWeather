// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9bojFabbqXnrha-177SVdJ83_2pT-cYM",
  authDomain: "btw-auth.firebaseapp.com",
  projectId: "btw-auth",
  storageBucket: "btw-auth.firebasestorage.app",
  messagingSenderId: "2484302034",
  appId: "1:2484302034:web:8ff4f04f8499b5e5c13d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;