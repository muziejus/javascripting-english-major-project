let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 200,

    });
tileLayer.addTo(firstMap);
firstMap.setView([14.66667,-1.0],2);
function changeView(
){

firstMap.setView([40.71427,-74.00597,],10);
}
function changeView2(
){

firstMap.setView([14.66667,-1.0],2);
}
let geoFeatures;
$.getJSON("https://tamarticus.github.io/javascripting-english-major-project/finalproject/anotherbk.geo.json", function(data){
  // Define the Leaflet layer.
  let geoLayer;
  // Iterate over the .features property of the GeoJSON object to
  // create an array of objects (features), with every object’s
  // properties as noted.
  geoFeatures = data.features.map(function(feature){
    return {
      name: feature.properties.text,
      category: feature.properties.special,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });

  geoLayer = L.featureGroup(geoFeatures.map(function(feature){
let whichIcon;
let popupContent;
let category = feature.category;
popupContent = feature.name;
console.log(popupContent);
let greenIcon = L.icon({
iconUrl: "icons/icon_culture.png",
iconAnchor:   [50, 50],
iconSize:     [100,100], // size of the icon
popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
let redIcon = L.icon({
iconUrl: "icons/icon_other.png",
iconAnchor:   [50, 50],
iconSize:     [100,100], // size of the icon
popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
let yellowIcon = L.icon({
iconUrl: "icons/icon_nationality.png",
iconAnchor:   [50, 50],
iconSize:     [100,100], // size of the icon
popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});
let blueIcon = L.icon({
iconUrl: "icons/icon_august.png",
iconAnchor:   [50, 50],
iconSize:     [100,100], // size of the icon
popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});

    if(feature.category==="culture"){
      whichIcon=greenIcon;
      console.log("culture");
    }
    else if(feature.category==="august\'s life"){
        whichIcon=blueIcon;
    }
    else if(feature.category==="nationality"){
      whichIcon=yellowIcon;
    }
    else{
      whichIcon=redIcon;
    }
    return L.marker(feature.latLng,{icon:whichIcon}).bindPopup(popupContent).on("click",markerOnClick);
    function markerOnClick(e)
{
  if(category==="culture"){
  $("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#78BE59'>Cultural and Historical References</h2><pstyle='text-align: left;'>text here</p>");
}
else if(category==="nationality"){
$("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#A39B36'>Nationalities Mentioned</h2> <p style='text-align: left;'>text here</p>");
}
else if(category==="august\'s life"){
$("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#427E94'>Places in August's Life</h2><pstyle='text-align: left;'>text here</p>");
}
else{
  $("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#B85262'>Places in Other's Lives</h2><pstyle='text-align: left;'>text here</p>");

}
}

})
);

  // Add the layer to the map.
  geoLayer.addTo(firstMap);
  // Redraw the map so that all the markers are visible.
  firstMap.fitBounds(geoLayer.getBounds());
  // Zoom out one level to give some padding.
  firstMap.zoomOut(1);
});
