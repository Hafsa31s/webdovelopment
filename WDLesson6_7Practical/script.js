let data;
async function init(){

let link = "collision.dataset"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${on_street_name}</h3>
                 <h4>${off_street_name}</h4>
                 <p>${crash_date}</p>
                 <p>${crash_time}</p>
                 <hr>
                 <p>${collision_id}</p>
              </div>`    
  }

  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.borough == borough){
     build += `<div class="fitted card">
                 <h3>${on_street_name}</h3>
                 <h4>${off_street_name}</h4>
                 <p>${crash_date}</p>
                 <p>${crash_time}</p>
                 <hr>
                 <p>${collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}