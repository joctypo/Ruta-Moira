import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
//import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

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

 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//export function createUserWithEmailAndPassword();


   


  
