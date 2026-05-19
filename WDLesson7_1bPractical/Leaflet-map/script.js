let data, mapObj;

function displayMap(){
  //3: Retrieve the borough from the user via the text input, filter the data using filter(), and generate cards for this subset of data.
  let lat = get("lat").value;
  let lon = get("lon").value;

  if(isNaN(lat) || isNaN(lon)){
    alert("Please enter valid coordinates");
    return;
  }

  showMap(lat, lon);
}
function get(id){
  return document.getElementById(id);
}
function showMap(lat, lon){

  let location = [lat, lon];
  if(!mapObj){

    mapObj = L.map("map").setView(location, 14);

  
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap"
    }).addTo(mapObj);

  } else {
    mapObj.setView(location, 14);
  }
  if(marker){
    mapObj.removeLayer(marker);
  }
  marker = L.marker(location).addTo(mapObj);
}
