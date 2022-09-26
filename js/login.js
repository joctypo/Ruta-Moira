const loginForm = document.getElementById("loginform");
const registerbutton = document.getElementById("registerbutton");

const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        const userInfo = await getUserInfo(user.uid);
        alert("Ingresó con éxito");
        window.open("./index.html","_self");
    } catch (e) { }
}

const getUserInfo = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (e) { }
}

const logout = async () => {
    try {
        await signOut(auth);
        alert("Salió con éxito");
    } catch (e) { }
}

registerbutton.addEventListener("click", e=>{
    window.open("./register.html","_self");
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email && password) {
       /* alert("eso mamona");
        login(email, password);*/
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            ()=>{
                setLoggedUser(auth.currentUser);
    
                db.ref('users/' + auth.currentUser.uid).once('value', (snapshot) => {
    
                    let data = snapshot.val();
            
                    if (data.rol == 'estudiante') {
                        window.open("./index.html","_self");
                    }
            
                    if (data.rol == "moira") {
                        
                       // window.location.href = "homeuser.html";
                    }
              
            
                }).catch((error) => {
                    console.error(error);
                    alert(error);
                });
    
    
                
            }
        ).catch((error)=>{
    
            console.log(error.message);
            alert(error);
        })
    } else { 
        alert("paila mamasita");
    }
});
