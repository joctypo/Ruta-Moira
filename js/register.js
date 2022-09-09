import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


const registerForm = document.getElementById("register");


const createUser = async (email, password, userFields) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const userId = user.uid;
        await setDoc(doc(db, "users", userId), userFields);
        window.open("./login.html","_self");
    } catch (e) {
        if (e.code === "auth/email-already-in-use") {
            console.log("Correo electrónico en uso...")
        }
        if (e.code === "auth/weak-password") {
            console.log("Intenta con una contraseña más segura...")
        }
    }
}

registerForm.addEventListener("submit", e => {
    e.preventDefault();

    //Datos del registro
    const name = registerForm.name.value;
    const lastname = registerForm.lastname.value;
    const code = registerForm.code.value;
    const university = registerForm.university.value;
    const person = registerForm.person.value;
    const celphone = registerForm.celphone.value;
    const datamoira = registerForm.datamoira.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    

    if (email && password) {
        createUser(email, password, {
            name,
            lastname,
            code,
            university,
            person,
            celphone,
            datamoira,
            rol: "estudiante",
        });
        
        
    } else { }
    
});
