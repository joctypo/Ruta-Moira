import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db= getFirestore(app);
  const auth= getAuth();


const firebaseConfig = {
    apiKey: "AIzaSyC35qD52fPv574SQWTU5XkBdC-e1IMkLCo",
    authDomain: "ruta-moira.firebaseapp.com",
    databaseURL: "https://ruta-moira-default-rtdb.firebaseio.com",
    projectId: "ruta-moira",
    storageBucket: "ruta-moira.appspot.com",
    messagingSenderId: "723021938751",
    appId: "1:723021938751:web:f38c5943995e463ec4388a",
    measurementId: "G-SRRG0BQERL"
  };