//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, output, result;
 async function init() {
  let link = "data.js"
  info = await fetch(link);
  data = await info.json();
  
 output = get("output")
 let build = "";
  //Challenge 2: Test the card( ) developed in Challenge 1 by displaying the first violation to the webpage.
  for(let i = 0; i < data.length; i++){
    let voilation = data[i];
    build += card(voilation);
        
  }
  output.innerHTML = build;

  //Challenge 4: Display all the Open Parking and Camera Violations to the web page using the cards( ) from Challenge 3.
  
  
}
function get(id) {
  return document.getElementById(id);
}

function card(info) {

  let build = `
    <div class="card">
      <h2>${info.plate}</h2>
      <p>${info.violation}</p>
      <a href="${info.summons_image}" target="_blank">Ticket</a>
    </div>
  `;

  return build;
}

