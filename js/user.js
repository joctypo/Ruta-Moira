
onAuthStateChanged(auth, (user) => {
  if (user) {
    //alert(user);
    window.open("#","_self");
  } else { 
    window.open("./login.html","_self");
  }
});

