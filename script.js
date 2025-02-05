/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/ 

// get the result element

let bloco1  = document.getElementById("bloco1");

let bloco2  = document.getElementById("bloco2");




const bloco3 = document.querySelector("#bloco3");

const bloco4 = document.querySelector("#bloco4");

bloco1.value = "";
bloco2.value = "";

bloco3.value = "";
bloco4.value = "";

 INTERCEPT = -34.77688217;
 D = 0.01025451;
 PC = 10.84492912;
 PCQ = -0.46311749;

 INTERCEPT = parseFloat(INTERCEPT);
 D = parseFloat(D);
 PC = parseFloat(PC);
 PCQ = parseFloat(PCQ);

// Input numbers by key pressed
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Calculator logic
function calc(){
     
     bloco1texto  = bloco1.value;
     bloco2texto  = bloco2.value;

     valor1 = parseFloat(bloco1texto);
     valor2 = parseFloat(bloco2texto);

     let resultado1;
     resultado1 = INTERCEPT+(D*valor1)+(PC*valor2)+(PCQ*(valor2*valor2));
     
    bloco3.value = Math.round(resultado1 * 100) / 100;

    let resultado2;

    resultado2 = resultado1/30;

    bloco4.value = Math.round(resultado2 * 100) / 100;
   
   if(result.value != ""){
       
      

    } else{
        alert("Erro! Adicione valores válidos.")
    }

    

}

// Reset button
function reset(){
    bloco1.value = "";
    bloco2.value = "";
    bloco3.value = "0";
    bloco4.value = "0";
}

// Del button
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

/*
    ====================================================
    =================== TOGGLE THEME ===================
    ====================================================
*/

// All colors for differents themes
const theme = {
    defaul(){
       

        root.style.setProperty('--background'          , '#3a4764');
        root.style.setProperty('--background-dark'     , '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');
        
        root.style.setProperty('--key-color-top'       , '#ffffff');
        root.style.setProperty('--key-color-bottom'    , '#3a4764');
        root.style.setProperty('--key-background'      , '#eae3dc');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#637097');
        root.style.setProperty('--key-blue-shadow'     , '#404e72');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    dark(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
        
        
       /* root.style.setProperty('--background', '#17062a');
        root.style.setProperty('--background-dark', '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');

        root.style.setProperty('--key-color-top', '#f7de43');
        root.style.setProperty('--key-color-bottom', '#f7de43');
        root.style.setProperty('--key-background', '#331b4d');
        root.style.setProperty('--key-shadow', '#851c9c');

        root.style.setProperty('--key-blue-background', '#56077c');
        root.style.setProperty('--key-blue-shadow', '#851c9c');

        root.style.setProperty('--key-red-background', '#00decf');
        root.style.setProperty('--key-red-shadow', '#00decf');*/
    }
}

// Get the root element
var root = document.querySelector(':root');

// Checking the user themes preference
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// changing the theme with the results above
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if(lightThemeMq.matches){
    document.getElementById('btnTheme').value = "2";
    theme.light();    
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();    
}

// Create a function for recive the value of range input
function myFunction_set(val) {
    // receiving the input type range value
    document.getElementById('btnTheme').value = val; 

    // changing the theme with the results above
    if(val == 1){
        theme.defaul();
    } 
     
    else if(val == 2){
        theme.light();
    }
    
    else{
        theme.dark();
    } 
  
}


