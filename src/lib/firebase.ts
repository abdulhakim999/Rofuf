import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-hyKcBTYcqXWfti7rIHEUnbePec_hifE",
  authDomain: "rofuf-cd1be.firebaseapp.com",
  projectId: "rofuf-cd1be",
  storageBucket: "rofuf-cd1be.firebasestorage.app",
  messagingSenderId: "595985403170",
  appId: "1:595985403170:web:5b6cd22ba0999f6d60697b",
  measurementId: "G-2B703QZ4Z8"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
