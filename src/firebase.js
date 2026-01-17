// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbsJgLhUq1PkvfZdifyeAGAuZEtMtsBoQ",
  authDomain: "lamps-store.firebaseapp.com",
  projectId: "lamps-store",
  storageBucket: "lamps-store.firebasestorage.app",
  messagingSenderId: "1089649816522",
  appId: "1:1089649816522:web:b00a5b5951c08349a71533",
  measurementId: "G-C96BF940TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);