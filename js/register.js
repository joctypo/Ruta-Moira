import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from "./firebase.js";


//Variables declarations 
const registerForm = document.getElementById("register");
const loginbutton = document.getElementById ("loginbutton");



//Submit register form 
registerForm.addEventListener("submit", e => {
    e.preventDefault();

    //Datos del registro
   //var datamoira = registerForm.datamoira.value;
    var email = registerForm.email.value;
    var password = registerForm.password.value;
    
    var userData = {
            rol: "estudiante",
    }


    //Aquí se crea el usuario 
    createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {

        const user = userCredential.user;
        //No más se registra envía al login 
        window.location.href = "login.html"
      

    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;


    });    
});


//Botones para formulario y para ir a otra pestaña 


//Boton de regresar al login
loginbutton.addEventListener("click", e=> {
    window.open("./login.html","_self");
})