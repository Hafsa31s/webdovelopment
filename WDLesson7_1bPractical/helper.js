//get( ) accepts an id of an element and returns the actual element with that id. This functions serves to shorten the code required to get an element
function get(id){
  return document.getElementById(id);
}

//Challeng 1: Create a function card that accepts a JSON of a 311 complaint, generates and returns an appropriate card for the complaint

function card( info ){
   let build = `
    <div class="card"
      <h2>Plate: ${info.plate}</h2>

      <p><b>State:</b> ${info.state}</p>

      <p><b>Violation:</b> ${info.violation}</p>

      <p><b>Issue Date:</b> ${info.issue_date}</p>

      <p><b>Time:</b> ${info.violation_time}</p>

       </div>
       `;
       return build;
} 



//Challenge 2: Create a function cards that accepts an array of JSON of Open Parking and Camera Violations, generates and return cards for each violation
function cards(array) {

  let build = "";

  for (let i = 0; i < array.length; i++) {
    build += card(array[i]);
  }

  return build;
}
async function init() {
  let link = "data.js";

  let info = await fetch(link);
  data = await info.json();

  output = get("output");

  output.innerHTML = cards(data);
}

