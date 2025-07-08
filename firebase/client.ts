// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA3NTYZape9hs4jGNQN--iJcc61Qv-cC_w",
  authDomain: "jarvis-175c0.firebaseapp.com",
  projectId: "jarvis-175c0",
  storageBucket: "jarvis-175c0.firebasestorage.app",
  messagingSenderId: "337429743656",
  appId: "1:337429743656:web:e703157873b54abe580d1d",
  measurementId: "G-5W5MCHGK7W"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
