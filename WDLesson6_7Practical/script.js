let data;
async function init(){

let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
let info = await fetch(link);
let data = await info.json();

  let output = document.getElementById("output");
  let build = "";
    let ct = 0; 
for (let i = 0; i < data.length; i++){
    let collision = data[i];
   build += `<div class="fitted card">
                 <h3>${collision.on_street_name}</h3>
                 <h4>${collision.off_street_name}</h4>
                 <p>${collision.crash_date}</p>
                 <p>${collision.crash_time}</p>
                 <hr>
             </div>`;
      ct += 1;
  }

  output.innerHTML = build;
}
 