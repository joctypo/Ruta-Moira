import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from "./firebase.js";


//Variables declarations 
const registerForm = document.getElementById("register");
const nextbutton = document.getElementById ("nextbutton");
const comebutton = document.getElementById ("comebutton");
const loginbutton = document.getElementById ("loginbutton");



//Submit register form 
registerForm.addEventListener("submit", e => {
    e.preventDefault();

    //Datos del registro
    var name = registerForm.name.value;
    var lastname = registerForm.lastname.value;
    var code = registerForm.code.value;
    var university = registerForm.university.value;
    var person = registerForm.person.value;
    var celphone = registerForm.celphone.value;
    //var datamoira = registerForm.datamoira.value;
    var email = registerForm.email.value;
    var password = registerForm.password.value;
    
    var userData = {
            name: name,
            lastname: lastname,
            code: code,
            institution: university,
            person: person,
            celphone: celphone,
            datamoira: datamoira,
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
nextbutton.addEventListener("click", e=>{

    document.getElementById("fs-1").style.display = "none";
    document.getElementById("fs-2").style.display = "flex";
    document.getElementById("fs-2").style.justifyContent = "center";

})

comebutton.addEventListener("click", e=> {
    document.getElementById("fs-2").style.display = "none";
    document.getElementById("fs-1").style.display = "flex";
    document.getElementById("fs-1").style.justifyContent = "center";
})

//Boton de regresar al login
loginbutton.addEventListener("click", e=> {
    window.open("./login.html","_self");
})