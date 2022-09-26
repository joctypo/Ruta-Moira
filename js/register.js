const registerForm = document.getElementById("register");
const nextbutton = document.getElementById ("nextbutton");
const comebutton = document.getElementById ("comebutton");
const loginbutton = document.getElementById ("loginbutton");

const createUser = async (email, password, userFields) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const userId = user.uid;
        await setDoc(doc(db, "users", userId), userFields);
        window.open("./login.html","_self");
    } catch (e) {
        if (e.code === "auth/email-already-in-use") {
            console.log("Correo electrónico en uso...")
        }
        if (e.code === "auth/weak-password") {
            console.log("Intenta con una contraseña más segura...")
        }
    }
}

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

loginbutton.addEventListener("click", e=> {
    window.open("./login.html","_self");
})


registerForm.addEventListener("submit", e => {
    e.preventDefault();

    //Datos del registro
    const name = registerForm.name.value;
    const lastname = registerForm.lastname.value;
    const code = registerForm.code.value;
    const university = registerForm.university.value;
    const person = registerForm.person.value;
    const celphone = registerForm.celphone.value;
    const datamoira = registerForm.datamoira.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    

    if (email && password) {
        createUser(email, password, {
            name,
            lastname,
            code,
            university,
            person,
            celphone,
            datamoira,
            rol: "estudiante",
        });
        
        
    } else { }
    
});
