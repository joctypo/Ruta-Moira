import {collection, addDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {db, auth} from "./firebase.js";


// Declaración de cada formulario realizado 
const supportform = document.getElementById("supportform");

const fssr2 = document.getElementById("fssr2");
const fssr3 = document.getElementById("fssr3");
const fssr4 = document.getElementById("fssr4");
const fssr5 = document.getElementById("fssr5");
const fssr6 = document.getElementById("fssr6");
const fssa1 = document.getElementById("fssa1");
const fssa2 = document.getElementById("fssa2");
const fssa3 = document.getElementById("fssa3");
const fssa4 = document.getElementById("fssa4");
const fssa5 = document.getElementById("fssa5");
const fssa6 = document.getElementById("fssa6");
const checkanoni = document.getElementById("checkanon");


var name,lastname,cedula,borndate,city,celphone,addres,email,person; 


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

fssr6.addEventListener("click", e=>{
    window.scrollTo(0,0); 
    document.getElementById("fss6").style.display = "none";
    document.getElementById("fss5").style.display = "flex";  

});

//Aquí verificamos los datos
fssa1.addEventListener("click", e=>{
    
    window.scrollTo(0,0); 
    document.getElementById("fss1").style.display = "none";
    document.getElementById("fss2").style.display = "flex";  

});

//Verifico Celular, ciudad, correo electrónico y tipo de persona 
fssa2.addEventListener("click", e=>{

  
        if(supportform.city.value && supportform.person.value != "null"){

            window.scrollTo(0,0); 
            document.getElementById("fss2").style.display = "none";
            document.getElementById("fss3").style.display = "flex";  
            
        }else {
           alert("Hay datos que son obligatorios sin ser digitados, por favor completalos para seguir");
        }
    }
);

fssa3.addEventListener("click", e=>{
   
        if(supportform.identity.value && supportform.orientation.value && supportform.diversity.value && supportform.helppsico.value!= "null"){
            window.scrollTo(0,0); 
            document.getElementById("fss3").style.display = "none";
            document.getElementById("fss4").style.display = "flex"; 
        }else {
           alert("Hay datos que son obligatorios sin ser digitados, por favor completalos para seguir");
        }


});

fssa4.addEventListener("click", e=>{
      if(supportform.agea.value  !== "" ){
        if(supportform.sexa.value && supportform.persona.value != "null"){
            window.scrollTo(0,0); 
            document.getElementById("fss4").style.display = "none";
            document.getElementById("fss5").style.display = "flex";  
        }else {
           alert("Hay datos que son obligatorios sin ser digitados, por favor completalos para seguir");
        }
    }else {
        alert("Hay datos que son obligatorios sin ser digitados, por favor completalos para seguir");  
    }

});

fssa5.addEventListener("click", e=>{

        if(supportform.violence.value && supportform.place.value && supportform.guns.value != "null"){
            window.scrollTo(0,0); 
            document.getElementById("fss5").style.display = "none";
            document.getElementById("fss6").style.display = "flex";  
        }else {
           alert("Hay datos que son obligatorios sin ser digitados, por favor completalos para seguir");
        }
    

});

checkanoni.addEventListener("click", e=> {
    

    var checkanon = document.getElementById("checkanon").checked;
    if(checkanon){
            document.getElementById("nameform").disabled = "true";
            document.getElementById("nameform").value = "Anónima";
            document.getElementById("lastnameform").disabled = "true";
            document.getElementById("lastnameform").value = "Anónima";
            document.getElementById("documentform").disabled = "true";
            document.getElementById("documentform").value = "Anónima";
            document.getElementById("celform").disabled = "true";
            document.getElementById("celform").value = "Anónima";
            document.getElementById("addresform").disabled = "true";
            document.getElementById("addresform").value = "Anónima";
            document.getElementById("mailform").disabled = "true";
            document.getElementById("mailform").value = "Anónima";
           // document.getElementById("nameform").value("Anonimo");
    }else if(checkanon==false){
        document.getElementById("nameform").disabled = false;
        document.getElementById("nameform").value= '';
        document.getElementById("lastnameform").disabled = false;
        document.getElementById("lastnameform").value= '';
        document.getElementById("documentform").disabled = false;
        document.getElementById("documentform").value= '';
        document.getElementById("celform").disabled = false;
        document.getElementById("celform").value= '';
        document.getElementById("addresform").disabled = false;
        document.getElementById("addresform").value= '';
        document.getElementById("mailform").disabled = false;
        document.getElementById("mailform").value= '';
    }
    //alert(checkanon);
})




supportform.addEventListener("submit", e => {
    e.preventDefault();

    
    //Part 1 Form
    //Verificamos si es anónima la denuncia para no guardar ciertos datos
    var checkanon = document.getElementById("checkanon").checked;

    if( checkanon){
        name = "Denuncia Anónima";
        lastname = "Denuncia Anónima";
        cedula = "Denuncia Anónima";
        borndate = "Denuncia Anónima";
        city = supportform.city.value;
        celphone = "Denuncia Anónima";
        addres = "Denuncia Anónima";
        email = "Denuncia Anónima";
        person = supportform.person.value;


    }else{
        name = supportform.name.value;
        lastname = supportform.lastname.value;
        cedula = supportform.cedula.value;
        borndate = supportform.borndate.value;
        city = supportform.city.value;
        celphone = supportform.celphone.value;
        addres = supportform.addres.value;
        email = supportform.email.value;
        person = supportform.person.value;
       
       
    }
    

    //Part 2 Form 
    const identity = supportform.identity.value;
    const orientation = supportform.orientation.value;
    const pronouns = supportform.pronouns.value;
    const nickname = supportform.nickname.value;
    const contact = supportform.contact.value;
    const diversity = supportform.diversity.value;
    const helppsico = supportform.helppsico.value;

    //Part 3 Form
    const namea = supportform.namea.value;
    const lastnamea = supportform.lastnamea.value;
    const sexa = supportform.sexa.value;
    const agea = supportform.agea.value;
    const persona = supportform.persona.value;
    const observations = supportform.observations.value;

  
    //Part 4 Form
    var factsdate = supportform.factsdate.value;
    var factshour = supportform.factshour.value;
    var violence = supportform.violence.value;
    var place = supportform.place.value;
    var guns = supportform.guns.value;
    var factsdescription = supportform.factsdescription.value;
    //console.log(factsdate);



    if (name && lastname && cedula && email && person) {
        //alert("subiendo caso");

        createcase({
            uid,
            name,
            lastname,
            cedula,
            borndate,
            city,
            celphone,
            addres,
            email,
            person,
            identity,
            orientation,
            pronouns,
            nickname,
            contact,
            diversity,
            helppsico,
            namea,
            lastnamea,
            sexa,
            agea,
            persona,
            observations,
            factsdate,
            factshour,
            violence,
            place,
            guns,
            factsdescription,
            status:"Enviado",
            observati: "Pronto estaremos en contacto, te pedimos paciencia, estamos procesando tu solicitud",
        });
    }else{
        alert("no se creo");
    }

});


fssr6.addEventListener("click", ()=> {
    fssr6.disabled = true;
    
    setTimeout(() => {
      fssr6.disabled = false;
      
    }, 3000);

});