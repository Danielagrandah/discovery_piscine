console.log("Hello world!");

// stockons une référence au bouton dans une variable appelée btn
// querySelector() method returns the first element that matches a CSS selector.
var btn = document.querySelector("button"); 


//function ramdom 
function random(number) {
  return Math.floor(Math.random() * (number + 1));
  
} 
console.log("funciona");

//addEventListener
btn.onclick = function () {
  var rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    
  document.body.style.backgroundColor = rndCol;
}; 

