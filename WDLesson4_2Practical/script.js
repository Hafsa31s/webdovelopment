// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/
/* Challenge 2:  Create the function for Challenge 1 scenario */
function area() {
  let l = Number(document.getElementById("length").value);
  let w = Number(document.getElementById("width").value);
  let output = document.getElementById("output");

  let msg = "";
  if (l <= 0 || w <= 0) {
    msg = "Inappropriate measurement";
  } else {
    let area = l * w;
    msg = "Area is " + area;
  }
  output.innerHTML = msg;
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");

  let image = "";

  if (animal == "Bear" && emotion == "Funny") {
    image = "bear_funny.jpg";
  } 
  else if (animal == "Bear" && emotion == "Sad") {
    image = "bear_sad.jpg";
  } 
  else if (animal == "Cat" && emotion == "Funny") {
    image = "cat_funny.jpg";
  } 
  else if (animal == "Cat" && emotion == "Sad") {
    image = "cat_sad.jpg";
  } 
  else if (animal == "Dog" && emotion == "Funny") {
    image = "dog_funny.jpg";
  } 
  else if (animal == "Dog" && emotion == "Sad") {
    image = "dog_sad.jpg";
  } 
  else {
    output.innerHTML = "Please select both options.";
    return;
  }

  output.innerHTML = `<img src="${image}" width="200px">`;
}