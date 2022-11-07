import {collection, getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db} from "./firebase.js";
import {auth} from "./firebase.js";
import {onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

var uid;
let casesViolence = [];

const casesSection = document.getElementById("tablecases");
const logout = document.getElementById("logout");

//Conocer actual usuario en el dispositivo 
onAuthStateChanged(auth, (user) => {
    if (user) {
      //alert(user);
      uid = user.uid;
      window.open("#","_self");
    } else { 
      window.open("./login.html","_self");
    }
  });

  
//Cerrar sesion
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
    casos.setAttribute("href", `./casesdetails.html?id=${cases.id}`);


    casos.innerHTML = `
    <div class = "casos__card">
        <caption>Código caso</caption>
        <p>${cases.id}</p>
        <caption>Caso</caption>
        <p>${cases.factsdescription}</p>
        <caption> Estado </caption>
        <p id="${cases.status}">${cases.status}</p>
        
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

    filtersAction();
}





//Aquí filtramos los casos del usuario 
async function filtersAction(){

    const filterValue = uid;

    let sortedCases = [];


    //--------Listar por usuario------ 
    sortedCases = casesViolence.filter((everycase) => everycase.uid === filterValue);
    console.log(sortedCases);
    
    casesSection.innerHTML = "";
    sortedCases.forEach(everycase => {
        rendercases(everycase);
    });




}



/*const querySnapshot = await getDocs(collection(db, "cases"));
querySnapshot.forEach((doc) => {


  console.log(`${doc.id} => ${doc.data()}`);
});
*/

loadCases();