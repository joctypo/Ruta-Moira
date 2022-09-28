import {collection, getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db, auth} from "./firebase.js";
import {onAuthStateChanged,singOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

var useruid;
let casesViolence = [];

const casesSection = document.getElementById("tablecases");


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

    singOut(auth).then(()=>{
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
        <caption>Código caso</caption>
        <p>${cases.id}</p>
        <caption>Tipo de violencia</caption>
        <p>${cases.violence}</p>
        <caption> Estado </caption>
        <p id="casesstatus">${cases.status}</p>
        <img src="./sources/View.svg">
        <caption> Ver </caption>
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





//Aquí filtramos los casos del usuario 
async function filtersAction(){

    const filterValue = uid;

    let sortedCases = [];


    //--------Listar por usuario------ 
    sortedCases = casesViolence.filter((everycase) => everycase.uid === filterValue);
    console.log(sortedCases);
    

}



/*const querySnapshot = await getDocs(collection(db, "cases"));
querySnapshot.forEach((doc) => {


  console.log(`${doc.id} => ${doc.data()}`);
});
*/

loadCases();