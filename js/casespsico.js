import {collection, getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db, auth} from "./firebase.js";
import {onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

var useruid;
let casesViolence = [];

const casesSection = document.getElementById("tablecases");
const csa = document.getElementById("csa");
const cscr = document.getElementById("cscr");
const creation= document.getElementById("creation");
const charts = document.getElementById("charts");


//Verificamos que tengamos un usuario
onAuthStateChanged(auth, (user) => {
    if (user) {
      //alert(user);
      useruid = user.uid
  
      if(useruid === "f7qXiyg7wtSCH8V4o5c6GV7GOVX2"|| "eBX8O0I8zBSa6eBJNcCOnTC3BK12" || "4ocanvLnAfghydq1hVWQg0tOXBI3"){
        window.open("#","_self");
      }else{
        window.open("./index.html","_self");
      }
      
    } else { 
      window.open("./login.html","_self");
    }
  });


//Cerrar sesión psicologo
  logout.addEventListener("click",()=>{

    signOut(auth).then(()=>{
        alert("Se cerró su sesión correctamente");
    
    }).catch((error) =>{
        alert("Ocurrió un error cerrando la sesión");
    })



});


//Aquí se pintan los casos 
function rendercases(cases){
    const casos = document.createElement("a");
    casos.className = "casos"; 
    casos.setAttribute("href", `./casedetailpsico.html?id=${cases.id}`);

    casos.innerHTML = `
    <div class = "casos__card">
        <div class="intern">
        <caption>Código caso</caption>
        <p>${cases.id}</p>
        </div>
        <div class="intern">
        <caption> Hechos </caption>
        <p>${cases.factsdescription}</p>
        <caption> Observaciones </caption>
        <p>${cases.observati}</p>
        </div>
        <div class="intern">
        <caption> Estado </caption>
        <p id="${cases.status}">${cases.status}</p>
        </div>
        <div class="intern">
        <caption> Ver </caption>
        <img src="./sources/View.svg">
        </div>
    </div>
`;
    casesSection.appendChild(casos);
}


async function loadCases(){

    const collectionRef = collection(db, "cases");
    try {
        const { docs } = await getDocs (collectionRef);
        casesViolence = docs.map ((doc) => {
            return{
                ...doc.data(),
                id: doc.id,
            };
        });

    } catch (e){
        console.log(e);
    }
    casesSection.innerHTML = "";
    casesViolence.forEach(everycase => {
        rendercases(everycase);
    });

}





//Aquí filtramos los casos del usuario  abiertos
async function filtersAction1(){

    const filterValue = "Cerrado";

    let sortedCases = [];


    //--------Listar por usuario------ 
    sortedCases = casesViolence.filter((everycase) => everycase.status !== filterValue);
    console.log(sortedCases);
    casesSection.innerHTML = "";
    sortedCases.forEach(item => {
      rendercases(item);
    })

}



//Aquí filtramos los casos del usuario cerrados
async function filtersAction2(){

  const filterValue = "Cerrado";

  let sortedCases = [];


  //--------Listar por usuario------ 
  sortedCases = casesViolence.filter((everycase) => everycase.status === filterValue);
  console.log(sortedCases);

  casesSection.innerHTML = "";
  sortedCases.forEach(item => {
    rendercases(item);
  })

}



//Botón de CSA
csa.addEventListener("click", ()=>{

  filtersAction1();


});


//Botón de CSCR 
cscr.addEventListener("click", ()=>{

  filtersAction2();

});


//Botón apoyo
creation.addEventListener("click" , ()=>{

  window.open("./apoyo.html","_blank");

});

//Botón de charts
charts.addEventListener("click", ()=>{

  window.open("./datagraphic.html","_self");

});




loadCases();