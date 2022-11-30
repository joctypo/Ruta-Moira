import {collection, addDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {db, auth} from "./firebase.js";


// Declaración de cada formulario realizado 
const supportform = document.getElementById("supportform");

const fssr2 = document.getElementById("fssr2");
const fssr3 = document.getElementById("fssr3");
const fssr4 = document.getElementById("fssr4");
const fssr5 = document.getElementById("fssr5");

const fssa1 = document.getElementById("fssa1");
const fssa2 = document.getElementById("fssa2");
const fssa3 = document.getElementById("fssa3");
const fssa4 = document.getElementById("fssa4");
const fssa5 = document.getElementById("fssa5");

const checkanoni = document.getElementById("checkanon");


var name,city,celphone,email,person; 
var uid;

//Verifica que el usuario haya ingresado
onAuthStateChanged(auth, (user) => {
    if (user) {
      
      uid = user.uid;

    } else { 
        window.open("./login.html","_self");
    }
  });


//Creation of case
const createcase = async (userFields) => {
    console.log(userFields);
    try {
        
        await addDoc(collection(db,"cases"), userFields);
        alert("Se envió su caso")
        window.location.href = "apoyo.html"
    } catch (e) {
        alert("No se puedo enviar")
    }
    
};



//Botones de avanzar y regresar
fssr2.addEventListener("click", e=>{
    window.scrollTo(0,0); 
    document.getElementById("fss2").style.display = "none";
    document.getElementById("fss1").style.display = "flex"; 
});

fssr3.addEventListener("click", e=>{
    window.scrollTo(0,0); 
    document.getElementById("fss3").style.display = "none";
    document.getElementById("fss2").style.display = "flex";  
    
});

fssr4.addEventListener("click", e=>{

    document.getElementById("fss4").style.display = "none";
    document.getElementById("fss3").style.display = "flex";  
    window.scrollTo(0,0); 
});

fssr5.addEventListener("click", e=>{
    window.scrollTo(0,0); 
    document.getElementById("fss5").style.display = "none";
    document.getElementById("fss4").style.display = "flex";  

});


//Aquí verificamos los datos
fssa1.addEventListener("click", e=>{
    
    window.scrollTo(0,0); 
    document.getElementById("fss1").style.display = "none";
    document.getElementById("fss2").style.display = "flex";  

});

//Verifico Celular, ciudad, correo electrónico y tipo de persona 
fssa2.addEventListener("click", e=>{

  
        if(supportform.factsdescription.value != "" && supportform.place.value  != "null"){

            window.scrollTo(0,0); 
            document.getElementById("fss2").style.display = "none";
            document.getElementById("fss3").style.display = "flex";  
            
        }else {
           alert("Hay datos que son necesarios sin ser digitados, por favor completalos para seguir");
        }
    }
);

fssa3.addEventListener("click", e=>{
   
        if(supportform.sexa.value != "null" && supportform.persona.value != "null"){
            window.scrollTo(0,0); 
            document.getElementById("fss3").style.display = "none";
            document.getElementById("fss4").style.display = "flex"; 
        }else {
           alert("Hay datos que son necesarios sin ser digitados, por favor completalos para seguir");
        }


});

fssa4.addEventListener("click", e=>{
     
        if(supportform.city.value != "null" && supportform.person.value != "null" && supportform.identity.value != "null" && supportform.orientation.value != "null" && supportform.contact.value != "null" && supportform.helppsico.value != "null"){
            window.scrollTo(0,0); 
            document.getElementById("fss4").style.display = "none";
            document.getElementById("fss5").style.display = "flex";  
        }else {
           alert("Hay datos que son obligatorios sin ser digitados, por favor completalos para seguir");
        }

});



checkanoni.addEventListener("click", e=> {
    

    var checkanon = document.getElementById("checkanon").checked;
    if(checkanon){
            document.getElementById("nameform").disabled = "true";
            document.getElementById("nameform").value = "Anónima";
            document.getElementById("celform").disabled = "true";
            document.getElementById("celform").value = "Anónima";
            document.getElementById("mailform").disabled = "true";
            document.getElementById("mailform").value = "Anónima";
           // document.getElementById("nameform").value("Anonimo");
    }else if(checkanon==false){
        document.getElementById("nameform").disabled = false;
        document.getElementById("nameform").value= '';
         document.getElementById("celform").disabled = false;
        document.getElementById("celform").value= '';
        document.getElementById("mailform").disabled = false;
        document.getElementById("mailform").value= '';
    }
    //alert(checkanon);
})




supportform.addEventListener("submit", e => {
    e.preventDefault();
    
    //Part 1 Form
    var factsdescription = supportform.factsdescription.value;
    var place = supportform.place.value;
    var factsdate = supportform.factsdate.value;
    var factsend = supportform.factsdateend.value;
    var howhelp= supportform.howhelp.value;
    
    //Part 2 Form
    const namea = supportform.namea.value;
    const sexa = supportform.sexa.value;
    const persona = supportform.persona.value;
    const observations = supportform.observations.value;
   
    //Part 3 Form
    //Verificamos si es anónima la denuncia para no guardar ciertos datos
    var checkanon = document.getElementById("checkanon").checked;

    if(checkanon){
        name = "Denuncia Anónima";
        city = supportform.city.value;
        celphone = "Denuncia Anónima";
        email = "Denuncia Anónima";
        person = supportform.person.value;

    }else{
        name = supportform.name.value;
        city = supportform.city.value;
        celphone = supportform.celphone.value;
        email = supportform.email.value;
        person = supportform.person.value;
    }
    const identity = supportform.identity.value;
    const orientation = supportform.orientation.value;
    const contact = supportform.contact.value;
    const helppsico = supportform.helppsico.value;
    const edad = supportform.borndate.value;
    const pronouns  = supportform.pronouns.value;
   
    if (name) {
        //alert("subiendo caso");

        createcase({
            uid,
            name,
            city,
            celphone,
            email,
            person,
            identity,
            edad,
            pronouns,
            orientation,
            contact,
            helppsico,
            namea,
            sexa,
            persona,
            observations,
            factsdate,
            factsend,
            howhelp,
            place,
            factsdescription,
            status:"Enviado",
            observati: "Pronto estaremos en contacto, te pedimos paciencia, estamos procesando tu solicitud",
        });

    }else{
        alert("No se pudo enviar");
    }

});


/*fssa5.addEventListener("click", ()=> {
    fssa5.disabled = true;
    
    setTimeout(() => {
      fssa5.disabled = false;
      
    }, 3000);

});*/