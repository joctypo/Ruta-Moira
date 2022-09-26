import { signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from "./firebase.js";

//Aquí se llama los formularios 
const loginForm = document.getElementById("loginform");
const registerbutton = document.getElementById("registerbutton");


//Botón para ir a registro
registerbutton.addEventListener("click", e=>{
    window.open("./register.html","_self");
});


//boton para el formulario
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email && password) {
        
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential)=>{


                //Signed in 
                const user = userCredential.user;
                window.open("./index.html","_self");
                /*
                db.ref('users/' + auth.currentUser.uid).once('value', (snapshot) => {
    
                    let data = snapshot.val();
            
                    if (data.rol == 'estudiante') {
                        
                    }
            
                    if (data.rol == "moira") {
                        
                       // window.location.href = "homeuser.html";
                    }*/
              
            
                }).catch((error) => {
                    console.error(error);
                    alert(error);
                });
     
         
        }else{

            //colocar modal diciendo que rellene campos
        }});
    
