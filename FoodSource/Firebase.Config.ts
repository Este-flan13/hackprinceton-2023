// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm76_mWIgyHW5cpZyf-gnmEIyXHwv1xD8",
  authDomain: "foodsource-cad61.firebaseapp.com",
  projectId: "foodsource-cad61",
  storageBucket: "foodsource-cad61.appspot.com",
  messagingSenderId: "598564081117",
  appId: "1:598564081117:web:96269f5a80a3356d7cfa34",
  measurementId: "G-SJB0JE580C",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
