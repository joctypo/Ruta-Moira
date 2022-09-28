import {auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

var useruid;

onAuthStateChanged(auth, (user) => {
  if (user) {
    //alert(user);
    useruid = user.uid

    if(useruid === "f7qXiyg7wtSCH8V4o5c6GV7GOVX2"|| "eBX8O0I8zBSa6eBJNcCOnTC3BK12" || "4ocanvLnAfghydq1hVWQg0tOXBI3"){
      window.open("./cases.html","_self");
    }else{
      window.open("#","_self");
    }
    
  } else { 
    window.open("./login.html","_self");
  }
});

