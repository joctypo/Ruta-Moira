import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const supportform = document.getElementById("support");
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

//Collect information
const createcase = async (userFields) => {
    //const user = auth.currentUser;
   // const uid = user.uid;
    try {

        await addDoc(collection(db,"cases"/*uid*/), userFields);
       // window.open("./login.html","_self");
    } catch (e) {
        alert("No se puedo enviar")
    }
    
};

fssr2.addEventListener("click", e=>{

    document.getElementById("fss2").style.display = "none";
    document.getElementById("fss1").style.display = "flex";  
    
})

fssr3.addEventListener("click", e=>{

    document.getElementById("fss3").style.display = "none";
    document.getElementById("fss2").style.display = "flex";  

})

fssr4.addEventListener("click", e=>{

    document.getElementById("fss4").style.display = "none";
    document.getElementById("fss3").style.display = "flex";  

})

fssr5.addEventListener("click", e=>{

    document.getElementById("fss5").style.display = "none";
    document.getElementById("fss4").style.display = "flex";  

})

fssr6.addEventListener("click", e=>{

    document.getElementById("fss6").style.display = "none";
    document.getElementById("fss5").style.display = "flex";  

})

fssa1.addEventListener("click", e=>{

    document.getElementById("fss1").style.display = "none";
    document.getElementById("fss2").style.display = "flex";  

})

fssa2.addEventListener("click", e=>{

    document.getElementById("fss2").style.display = "none";
    document.getElementById("fss3").style.display = "flex";  

})

fssa3.addEventListener("click", e=>{

    document.getElementById("fss3").style.display = "none";
    document.getElementById("fss4").style.display = "flex";  

})

fssa4.addEventListener("click", e=>{

    document.getElementById("fss4").style.display = "none";
    document.getElementById("fss5").style.display = "flex";  

})

fssa5.addEventListener("click", e=>{

    document.getElementById("fss5").style.display = "none";
    document.getElementById("fss6").style.display = "flex";  

})

supportform.addEventListener("submit", e => {
    e.preventDefault();
    //Part 1 Form
    const name = supportform.name.value;
    const lastname = supportform.lastname.value;
    const cedula = supportform.cedula.value;
    const borndate = supportform.borndate.value;
    const city = supportform.city.value;
    const celphone = supportform.celphone.value;
    const addres = supportform.addres.value;
    const email = supportform.email.value;
    const person = supportform.person.value;
    const check = supportform.check.value;

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
    const celphonea = supportform.celphonea.value;
    const emaila = supportform.email.value;
    const observations = supportform.person.value;

 
    //Part 4 Form
    const factsdate = supportform.factsdate.value;
    const factshour = supportform.factshour.value;
    const violence = supportform.violence.value;
    const place = supportform.place.value;
    const guns = supportform.guns.value;
    const factsdescription = supportform.factsdescription.value;


    if (name && lastname && cedula && email && person) {
        //alert("subiendo caso");

        createcase({
            name,
            lastname,
            cedula,
            borndate,
            city,
            celphone,
            addres,
            email,
            person,
            check,
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
            celphonea,
            emaila,
            observations,
            factsdate,
            factshour,
            violence,
            place,
            guns,
            factsdescription,
            status:"Enviado",
        });
    }else{
        alert("no se creo");
    }
});