// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfSzoIVDs2AGbdNeIKDk-0J9sai8ruPNA",
  authDomain: "pantry-system-2687e.firebaseapp.com",
  projectId: "pantry-system-2687e",
  storageBucket: "pantry-system-2687e.appspot.com",
  messagingSenderId: "700303866668",
  appId: "1:700303866668:web:c7c735c67fef06291b8a89",
  measurementId: "G-5J0W8PBXP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);