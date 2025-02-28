console.log('Hello');

// take the frist element type div
// var circle = document.querySelector("div"); 

//Define the constants
const element = document.getElementById("myDiv");
// const taille = element.width;
var  taille = 400;


//function increase
function increase(){
    if(element.style.width <= '400px'){
        element.style.width ='10px';
        element.style.height ='10px';  
    }else{
        console.log("ok")
    }

}




