const mobilelist = document.getElementById("mobile_list");
const menubutton = document.getElementById("menubutton");
const closemenu = document.getElementById("closemenu");


menubutton.addEventListener ("click", e =>{
    document.getElementById("closemenu").style.display = "flex";
    document.getElementById("menubutton").style.display = "none";
    document.getElementById("mobile_list").style.display = "flex";
    document.getElementById("mobile_list").style.flexDirection = "column";
    
});

closemenu.addEventListener ("click", e =>{
    document.getElementById("closemenu").style.display = "none";
    document.getElementById("menubutton").style.display = "flex";
    document.getElementById("mobile_list").style.display = "none";
  
});