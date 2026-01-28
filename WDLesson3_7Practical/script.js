/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
 function calculateDistance() {
let x1 = parseFloat(document.getElementById("x1").value);
let y1 = parseFloat(document.getElementById("y1").value);
let x2 = parseFloat(document.getElementById("x2").value);
let y2 = parseFloat(document.getElementById("y2").value);
let output = document.getElementById("output");
let a = Math.pow(x2 - x1, 2);
  let b = Math.pow(y2 - y1, 2);
  let distance = Math.sqrt(a + b);
  output.innerHTML = "Distance = " + distance;
}
 
/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculateCompound() {
  let P = parseFloat(document.getElementById("principal").value);
  let r = parseFloat(document.getElementById("rate").value) / 100;
  let t = parseFloat(document.getElementById("time").value);
  let n = parseFloat(document.getElementById("compound").value);
  let output = document.getElementById("compoundOutput");
  let A = P * Math.pow(1 + r / n, n * t);
  output.innerHTML = "Total Amount is " + A;
}