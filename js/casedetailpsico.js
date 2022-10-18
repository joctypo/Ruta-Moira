import {db, auth} from "./firebase.js";
import {getDoc , doc , updateDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
//import { URLSearchParams } from "url";
var useruid;
const casesinfo = document.getElementById("casesinfo");
const changebutton = document.getElementById("changebutton");
const formchange = document.getElementById("formchange");
 
//Pide el id del caso
function getParam(param){

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const caseid = searchParams.get(param);
    return caseid;

}

//Verifica que tengamos usuarios
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //alert(user);
      useruid = user.uid
  
      if(useruid === "f7qXiyg7wtSCH8V4o5c6GV7GOVX2"|| "eBX8O0I8zBSa6eBJNcCOnTC3BK12" || "4ocanvLnAfghydq1hVWQg0tOXBI3"){
        getcase("id");
        window.open("#","_self");
      }else{
        window.open("./index.html","_self");
      }
    } else { 
      window.open("./login.html","_self");
    }
  });
  

//Pide el caso puntual
async function getcase(){
    const caseid = getParam("id");
    const docRef = doc(db, "cases", caseid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const caso = {
    ...data,
    id: caseid,
    }
    rendercase(caso);

}


async function changedata(stado){
    const caseid = getParam("id");
    const docRef = doc(db, "cases", caseid);

    await updateDoc(docRef, {
        status:stado
    })

    alert("Se ha cambiado el estatus del caso correctamente")
}

async function changeobser(stado){
    const caseid = getParam("id");
    const docRef = doc(db, "cases", caseid);

    await updateDoc(docRef, {
        observati:stado
    })

    alert("Se ha cambiado la observación correctamente")
}

//Actualizar en caso de que se necesite
changebutton.addEventListener("click", ()=>{

    if(formchange.statuscase.value !== "null"){
        
        changedata(formchange.statuscase.value);

    }

    if(formchange.observations.value !== ""){

        changeobser(formchange.observations.value)
    }





});

function rendercase(caso){
    



    casesinfo.innerHTML = `
    <div>
    <caption>Código</caption>
    <p>${caso.uid}</p>
    <caption>Estado</caption>
    <p id="casesstatus">${caso.status}</p>
    <caption>Observaciones</caption>
    <p>${caso.observati}</p>
    <div id="line"></div>
    <h5>Datos Generales</h5>
    <caption>Nombres</caption>        
    <p>${caso.name}</p>   
    <caption>Apellidos</caption>        
    <p>${caso.lastname}</p>   
    <caption>Documento de identidad</caption>        
    <p>${caso.cedula}</p>   
    <caption>Fecha de nacimiento</caption>        
    <p>${caso.borndate}</p>   
    <caption>Celular</caption>        
    <p>${caso.celphone}</p>   
    <caption>Dirección de residencia</caption>        
    <p>${caso.addres}</p>   
    <caption>Correo electrónico</caption>        
    <p>${caso.email}</p>   
    <caption>Tipo de persona</caption>        
    <p>${caso.person}</p>   
    <caption>Identidad de género</caption>        
    <p>${caso.identity}</p>   
    <caption>Orientación sexual</caption>        
    <p>${caso.orientation}</p>   
    <caption>Pronombre de preferencia</caption>        
    <p>${caso.pronouns}</p>   
    <caption>Apodo o nombre de preferencia</caption>        
    <p>${caso.nickname}</p>   
    <caption>Medio por el que desea ser contactadx</caption>        
    <p>${caso.contact}</p>   
    <caption>Diversidad Funcional</caption>        
    <p>${caso.diversity}</p>   
    <caption>Desea asistencia por psicólogo</caption>        
    <p>${caso.helppsico}</p>   

    <h5>Agresor y hechos</h5>
    <caption>Nombres</caption>        
    <p>${caso.namea}</p>   
    <caption>Apellidos</caption>        
    <p>${caso.lastnamea}</p>   
    <caption>Sexo</caption>        
    <p>${caso.sexa}</p>   
    <caption>Edad aproximada</caption>        
    <p>${caso.agea}</p>   
    <caption>Tipo de persona</caption>        
    <p>${caso.persona}</p>   
    <caption>Celular</caption>        
    <p>${caso.celphonea}</p>   
    <caption>Correo electrónico</caption>        
    <p>${caso.emaila}</p>   
    <caption>Observaciones</caption>        
    <p>${caso.observations}</p>   
    <caption>Fecha de los hechos</caption>        
    <p>${caso.factsdate}</p>   
    <caption>Hora de los hechos</caption>        
    <p>${caso.factshour}</p>   
    <caption>Tipo de violencia</caption>        
    <p>${caso.violence}</p>   
    <caption>Lugar de los hechos</caption>        
    <p>${caso.place}</p>   
    <caption>Detalles del caso y hechos</caption>        
    <p>${caso.factsdescription}</p>  

</div>
   
    `






}