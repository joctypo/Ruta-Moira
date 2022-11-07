import {db, auth} from "./firebase.js";
import {getDoc , doc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
//import { URLSearchParams } from "url";

const casesinfo = document.getElementById("casesinfo");
 
//Pide el id del caso
function getParam(param){

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const caseid = searchParams.get(param);
    return caseid;

}

//Verifica que tengamos usuarios
onAuthStateChanged(auth, async (user) => {
    if (user) {
      //alert(user);
      getcase("id");
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

function rendercase(caso){
    



    casesinfo.innerHTML = `
    <div>
    <caption>Código</caption>
    <p>${caso.uid}</p>
    <caption>Estado</caption>
    <p id="${caso.status}">${caso.status}</p>
    <caption>Observaciones</caption>
    <p>${caso.observati}</p>
    <div id="line"></div>
    <h5>Datos Generales</h5>
    <caption>Nombre y Apellido</caption>        
    <p>${caso.name}</p>    
    <caption>Edad</caption>        
    <p>${caso.edad}</p>   
    <caption>Celular</caption>        
    <p>${caso.celphone}</p>     
    <caption>Correo electrónico</caption>        
    <p>${caso.email}</p>   
    <caption>Rol institucional</caption>        
    <p>${caso.person}</p>   
    <caption>Identidad de género</caption>        
    <p>${caso.identity}</p>   
    <caption>Orientación sexual</caption>        
    <p>${caso.orientation}</p>   
    <caption>Pronombre de preferencia</caption>        
    <p>${caso.pronouns}</p>    
    <caption>Medio por el que desea ser contactadx</caption>        
    <p>${caso.contact}</p>     
    <caption>Desea asistencia por psicólogo</caption>        
    <p>${caso.helppsico}</p>   

    <h5>Implicado(a) y hechos</h5>
    <caption>Nombres y Apellido Implicado(a)</caption>        
    <p>${caso.namea}</p>    
    <caption>Identidad de Género Implicado(a)</caption>        
    <p>${caso.sexa}</p>   
    <caption>Rol Institucional</caption>        
    <p>${caso.persona}</p>   
    <caption>Observaciones</caption>        
    <p>${caso.observations}</p>   
    <caption>Fecha de los hechos</caption>        
    <p>${caso.factsdate}</p>   
    <caption>Fecha final de los hechos</caption>        
    <p>${caso.factsend}</p>   
    <caption>Lugar de los hechos</caption>        
    <p>${caso.place}</p>   
    <caption>Detalles del caso y hechos</caption>        
    <p>${caso.factsdescription}</p>  

</div>
   
    `
}