import {collection, getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db, auth} from "./firebase.js";
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawChart);
//Declarar variables
var useruid;
let casesViolence = [];
var cali = 0,palmira = 0;
var candelaria=0,cerrito=0,florida=0,jamundi=0,cumbre=0,pradera=0,yumbo=0;
var estudiante=0,profesor=0,colaborador=0;
var mujer=0,hombre=0,queer=0,otro=0,prefieron=0;
var hetero=0,homo=0,bi=0,ase=0,panse=0,otroide=0,prefieride=0;
//var motriz=0,auditiva=0,visual=0,mental=0,cognitiva=0,ningu=0;
//var psicosi=0,psicono=0;
var mujera=0,hombrera=0,otra=0;
var estudianta=0,profesora=0,colaboradora=0,externa=0;
var campus=0,nocampus=0,alrede=0,otrospace=0;
var blancarma=0,fuegarma=0,otrarma=0,noarma=0;
var fisica=0,psicologica=0,sexual=0,simbolica=0,patrimonial=0;



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




  //Aquí cargamos los casos 
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

    countcity();
    countidentity();
    countorientation();
    counttypepeople();
    countsexenemy();
    countviolence();
    countviolenceperson();
    countplace();
    drawChart();

}



//Contador de ciudades
async function countcity(){

    casesViolence.forEach(item =>{
        if(item.city === "Cali"){
            cali++;
        }
        
        if(item.city === "Palmira"){
            palmira++;
        }
        
        if(item.city === "Candelaria"){
            candelaria ++;
        }

        if(item.city === "Cerrito"){
            cerrito ++;
        }

        if(item.city === "Florida"){
            florida++;
        }

        if(item.city === "Jamundí"){
            jamundi++;
        }

        if(item.city === "La Cumbre"){
            cumbre++;
        }

        if(item.city === "Pradera"){
            pradera++;
        }

        if(item.city === "Yumbo"){
            yumbo++;
        }
    })

console.log(cali);
}


//Contador de personas
async function counttypepeople(){

    casesViolence.forEach(item =>{
        if(item.person === "Estudiante"){
            estudiante++;
        }    
        if(item.person === "Profesor/a"){
            profesor++;
        }  
        if(item.person === "Colaborador/a"){
            colaborador++;
        }  

    })

}


//Contador de identidad
async function countidentity(){

    casesViolence.forEach(item =>{
        if(item.identity === "Mujer"){
            mujer++;
        }    
        if(item.identity === "Hombre"){
            hombre++;
        }  
        if(item.identity === "Queer"){
            queer++;
        }  
        if(item.identity === "Otro"){
            otro++;
        }  
        if(item.identity === "Prefiere no decirlo"){
            prefieron++;
        }  

    })
}

async function countsexenemy(){

    casesViolence.forEach(item =>{
        if(item.sexa === "Mujer"){
            mujera++;
        }    
        if(item.sexa === "Hombre"){
            hombrera++;
        }  
     
        if(item.sexa === "Otro"){
            otra++;
        }  
    

    })
}

async function countviolenceperson(){

    casesViolence.forEach(item =>{
        if(item.persona === "Estudiante"){
            estudianta++;
        }    
        if(item.persona === "Colaborador/a"){
            profesora++;
        }  
     
        if(item.persona === "Profesor/a"){
            colaboradora++;
        }  

        if(item.persona === "Alguien Externa"){
            externa++;
        }  
    

    })
}

async function countplace(){

    casesViolence.forEach(item =>{
        if(item.place === "Dentro del campus"){
            campus++;
        }    
        if(item.place === "Fuera del campus"){
            nocampus++;
        }  
     
        if(item.place === "Alrededores del campus"){
            alrede++;
        }  

        if(item.place === "Otro"){
            otrospace++;
        }  
    

    })
}

async function countviolence(){

    casesViolence.forEach(item =>{
        if(item.violence === "Violencia Física"){
            fisica++;
        }    
        if(item.violence === "Violencia Sexual"){
            sexual++;
        }  
     
        if(item.violence === "Violencia Simbólica"){
            simbolica++;
        }  

        if(item.violence === "Violencia Psicológica"){
            psicologica++;
        }  

        if(item.violence === "Violencia Económica"){
            patrimonial++;
        }  
    

    })
}

//Contador de orientación
async function countorientation(){

    casesViolence.forEach(item =>{
        if(item.orientation === "Heterosexual"){
            hetero++;
        }    
        if(item.orientation === "Homosexual"){
            homo++;
        }  
        if(item.orientation === "Bisexual"){
            bi++;
        }  
        if(item.orientation === "Asexual"){
           ase++;
        }  
        if(item.orientation === "Pansexual"){
            panse++;
        }  
        if(item.orientation === "Otro"){
           otroide++;
        }  
        if(item.orientation === "Prefiere no decirlo"){
            prefieride++;
        }  

    })
}    

//Función para crear los chart
async function drawChart() {
  
    console.log(cali);
    var data = google.visualization.arrayToDataTable([
      ['Ciudad', 'Cantidad de casos'],
      ['Cali', cali],
      ['Palmira',palmira],
      ['Candelaria',candelaria],
      ['Cerrito',cerrito],
      ['Florida',florida],
      ['Jamundí',jamundi],
      ['La Cumbre',cumbre],
      ['Pradera',pradera],
      ['Yumbo',yumbo]
    ]);
    
    var options = {
        colors:['#662D91'],
        fontName: 'Overpass',
        fontSize: '16',
        title:'Ciudades de las víctimas'
    };
    
    var chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);


    var data2 = google.visualization.arrayToDataTable([
        ['Tipo de personas víctima', 'Cantidad de personas'],
        ['Estudiantes', estudiante],
        ['Profesor/a',profesor],
        ['Colaborador/a',colaborador]
     
      ]);
      
      var options = {
        colors:['#FF92E8'],
        fontName: 'Overpass',
        fontSize: '16',
        title:'Tipo de personas víctimas'
      };
      
      var chart = new google.visualization.BarChart(document.getElementById('myChartperson'));
        chart.draw(data2, options);
  

      


    var data3 = google.visualization.arrayToDataTable([
            ['Identidad de género víctimas', 'Cantidad de personas'],
            ['Mujer', mujer],
            ['Hombre',hombre],
            ['Queer',queer],
            ['Otro',otro],
            ['Prefiere no decirlo',prefieron]
         
          ]);
          
          var options = {
            colors:['#F15A24'],
            fontName: 'Overpass',
            fontSize: '16',
            title:'Identidad de género víctimas'
          };
          
          var chart = new google.visualization.BarChart(document.getElementById('myChartidentity'));
            chart.draw(data3, options);    



    var data = google.visualization.arrayToDataTable([
                ['Orientación sexual víctimas', 'Cantidad de personas'],
                ['Heterosexual', hetero],
                ['Homosexual',homo],
                ['Bisexual',bi],
                ['Asexual',ase],
                ['Pansexual',panse],
                ['Otro',otroide],
                ['Prefiere no decirlo',prefieride]
             
              ]);
              
              var options = {
                colors:['#C1272D'],
                fontName: 'Overpass',
                fontSize: '16',
                title:'Orientación sexual víctimas'
              };
              
              var chart = new google.visualization.BarChart(document.getElementById('myChartorientation'));
                chart.draw(data, options);    


    var data = google.visualization.arrayToDataTable([
                    ['Sexo Victimarios', 'Cantidad de personas'],
                    ['Mujer', mujera],
                    ['Hombre',hombrera],
                    ['Otro',otra]
                  ]);
                  
                  var options = {
                    colors:['#FBB03B'],
                    fontName: 'Overpass',
                    fontSize: '16',
                    title:'Sexo Victimarios'
                  };
                  
                  var chart = new google.visualization.BarChart(document.getElementById('myChartsexenemy'));
                    chart.draw(data, options);    



     var data = google.visualization.arrayToDataTable([
                        ['Tipo de Victimarios', 'Cantidad de personas'],
                        ['Estudiantes', estudianta],
                        ['Docentes',profesora],
                        ['Colaboradores',colaboradora],
                        ['Personas externas',externa]
                      ]);
                      
                      var options = {
                        colors:['#009245'],
                        fontName: 'Overpass',
                        fontSize: '16',
                        title:'Tipo de Victimarios'
                      };
                      
                      var chart = new google.visualization.BarChart(document.getElementById('myChartviolenceperson'));
                        chart.draw(data, options);    


    
    var data = google.visualization.arrayToDataTable([
                            ['Lugar de los hechos', 'Casos en lugar'],
                            ['En el campus', campus],
                            ['Fuera del campus',nocampus],
                            ['Alrededores del campus',alrede],
                            ['Otro espacio',otrospace]
                          ]);
                          
                          var options = {
                            colors:['#29ABE2'],
                            fontName: 'Overpass',
                            fontSize: '16',
                            title:'Lugar de los hechos'
                          };
                          
                          var chart = new google.visualization.BarChart(document.getElementById('myChartplace'));
                            chart.draw(data, options);    
    

     var data = google.visualization.arrayToDataTable([
                                ['Tipos de violencia', 'Cantidad de casos'],
                                ['Física', fisica],
                                ['Psicológica',psicologica],
                                ['Simbólica',simbolica],
                                ['Sexual',sexual],
                                ['Económica',patrimonial]
                              ]);
                              
                              var options = {
                                colors:['#662D91'],
                                fontName: 'Overpass',
                                fontSize: '16',
                                title:'Tipos de violencia'
                              };
                              
                              var chart = new google.visualization.BarChart(document.getElementById('myChartviolence'));
                                chart.draw(data, options);    
    } 
    
    
loadCases();