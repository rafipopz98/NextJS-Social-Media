import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIir7vYCuJKe_J24YqB9KlP7EI46YFRzs",
  authDomain: "social-media-39f4d.firebaseapp.com",
  projectId: "social-media-39f4d",
  storageBucket: "social-media-39f4d.appspot.com",
  messagingSenderId: "20080612006",
  appId: "1:20080612006:web:4c2b4c879f098d1c72da67",
  measurementId: "G-650JFEG29N",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { app, db, auth, storage };
