// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1gxbzLC7ZVC8m4L6OBTNdIjG_LWAIVYk",
  authDomain: "in-browser-editor.firebaseapp.com",
  projectId: "in-browser-editor",
  storageBucket: "in-browser-editor.appspot.com",
  messagingSenderId: "715638443015",
  appId: "1:715638443015:web:dffeaab510f67a97212ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
