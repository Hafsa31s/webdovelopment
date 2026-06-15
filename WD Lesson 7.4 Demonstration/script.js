let data;
async function init(){

  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let motorvehicle = data[i];
    build += `<div class="fitted card">
                 <h3>${motorvehicle.on_street_name}</h3>
                 <hr>
                 <p>${motorvehicle.off_street_name}</p>
                 <p>${motorvehicle.crash_date}</p>
                 <p>People injured:${motorvehicle.number_of_persons_injured}</p>
                 <hr>
                 <p>People killed: ${motorvehicle.number_of_persons_killed}</p>
                 <hr>
                 <p>${motorvehicle.contributing_factor_vehicle_1}</p>
              </div>`    
  }
  output.innerHTML = build;
}