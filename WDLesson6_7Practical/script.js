let data; 
async function init(){

let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
let info = await fetch(link);
data = await info.json();

  let output = document.getElementById("output");
  let build = "";
    let ct = 0; 
for (let i = 0; i < data.length; i++){
    let collision = data[i];
   build += `<div class="fitted card">
                 <h3>${collision.on_street_name}</h3>
                 <h4>${collision.off_street_name}</h4>
                 <p>Date: ${collision.crash_date}</p>
                 <p>Time: ${collision.crash_time}</p>
                 <p> People injured: ${collision.number_of_persons_injured}</p>
                 <hr>
                 <p> Collision_ID: ${collision.collision_id}</p>
                 <hr>
             </div>`;
      ct += 1;
  }

  output.innerHTML = build;
}
 
function filterByTime(){
  let output = document.getElementById("output");
  let Time = document.getElementById("Time").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.crash_time == Time){
     build += `<div class="fitted card">
                 <h3>${collision.on_street_name}</h3>
                 <h4>${collision.off_street_name}</h4>
                 <p>Date: ${collision.crash_date}</p>
                 <p>Time: ${collision.crash_time}</p>
                 <p> People injured: ${collision.number_of_persons_injured}</p>
                 <hr>
                 <p> Collision_ID: ${collision.collision_id}</p>
                 <hr>
             </div>`;
      ct+=1;
    }
  }
    result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}
function filterBystreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("street").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let collision = data[i];
    if(collision.on_street_name ==street){
     build += `<div class="fitted card">
                 <h3>${collision.on_street_name}</h3>
                 <h4>${collision.off_street_name}</h4>
                 <p>Date: ${collision.crash_date}</p>
                 <p>Time: ${collision.crash_time}</p>
                 <p> People injured: ${collision.number_of_persons_injured}</p>
                 <hr>
                 <p> Collision_ID: ${collision.collision_id}</p>
                 <hr>
             </div>`;
      ct+=1;
    }
  }
    result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}