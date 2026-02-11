/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1);
  let status = "";
  let image = "";
  if (bmi < 18.5) {
    status = "Underweight";
    image = "underweight.png";
  } 
  else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Healthy Weight";
    image = "healthy.png";
  } 
  else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
    image = "overweight.png";
  } 
  else {
    status = "Obesity";
    image = "obese.png";
  }
  document.getElementById("result").innerHTML =
    "Your BMI is <strong>" + bmi + "</strong><br>Status: <strong>" + status + "</strong>";
  document.getElementById("bmiImage").src = image;
}

/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

