/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
const length = document.getElementById('length');
const width = document.getElementById('width');
const areaResult = document.getElementById('area-result');
const perimeterResult = document.getElementById('perimeter-result');


function recArea(){
 let l = document.getElementById("length")
 let w = document.getElementById("width")
  let output = document.getElementById("output")
let area = parseFloat (l.value) * parseFloat (w.value);
output.innerHTML = area;
 
}

function recPerimeter(){
  let l = document.getElementById("length")
 let w = document.getElementById("width")
  let output = document.getElementById("output")
let perimeter = parseFloat (l.value) * parseFloat (w.value);
output.innerHTML = area;
}
  
document
  .getElementById("calculate-area")
  .addEventListener("click", recArea);

document
  .getElementById("calculate-perimeter")
  .addEventListener("click", recPerimeter);
/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){

}

function cirPerimeter(){

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}