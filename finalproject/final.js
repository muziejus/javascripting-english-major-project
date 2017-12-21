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
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]),
    };
  });

  geoLayer = L.featureGroup(geoFeatures.map(function(feature){
let whichIcon;
let popupContent;
let category = feature.category;
popupContent = feature.name;
console.log(feature.latLng);
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
    function markerOnClick(e)
{
  if(category==="culture"){
  $("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#78BE59'>Cultural and Historical References</h2><pstyle='text-align: left;'>Throughout the novel, August makes references to the customs surrounding death in other cultures and places around the world: <a href=\"#\"onclick=\"openpopIndonesia()\">Indonesia</a>, <a href=\"#\"onclick=\"openpopNoP()\">the Northern Philippines</a>, <a href=\"#\"onclick=\"openpopFiji()\">Fiji</a>, and many more. This pattern is similar to the \”this is memory\” refrain in the novel. It forces the reader to pause during this otherwise past-paced and smooth stream-of-consciousness narrative. On top of that, though, this tick of August’s opens up the world in the novel. The reader must picture and consider places outside of <a href=\"#\"onclick=\"openpopBrooklyn()\">Brooklyn</a> and <a href=\"#\" onclick=\"openpopSweetGrove()\">SweetGrove</a>, the same way August. In this way, Woodson uses these thoughts to open readers up to the world outside their own. This novel which focuses largely on one woman’s memories and feelings has a surprising layer of awareness of the outside world. It also reveals August’s escapist nature. </p>");
}
else if(category==="nationality"){
$("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#A39B36'>Nationalities Mentioned</h2> <p style='text-align: left;'>Though there aren’t many nationalities mentioned in <i>Another Brooklyn</i>, they stand out in the context of the novel and serve an important purpose. They add to the novel’s historical landscape as well as exhibit August’s individual viewpoint and viewpoint as a black woman in this time period. <br><br>August describes the <a href=\"#\"onclick='openpopIrish()'>Irish</a> and <a href=\"#\"onclick='openpopItalian()'>Italian</a> women and families who moved away from her neighborhood twice in the novel. Though racism led the white families to flee, August seems to respond with shame, rather than anger. \"We knew the songs the the boys sang <i>Ungawa, Black Power. Destroy! White boy! </i>were just songs, not meant to chase white people out of our neighborhood,\" August laments (83).<br><br>August often describes people by their nationalities. This is in part another means of referencing someone’s race--as a minority, race plays a huge role in August’s life. But, this also relates to August’s and the novel’s discussions of origins. August is concerned with others’ origins because she grapples with her own. In her youth, this tension surrounding origins centers around the loss of her mother and the move from <a href=\"#\"onclick='openpopSweetGrove()'>SweetGrove</a> to <a href=\"#\"onclick='openpopBrooklyn()'>Brooklyn</a>. Once she is older, the tension seems to be more between the two locations of her youth (SweetGrove and Brooklyn) as well as between Brooklyn and everywhere she went after Brooklyn.</p>");
}
else if(category==="august\'s life"){
$("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#427E94'>Places in August's Life</h2><pstyle='text-align: left;'>text here</p>");
}
else{
  $("#info2").html("<h2 style='text-align: center; font-family: impact, sans-serif; color:#B85262'>Places in Other's Lives</h2><pstyle='text-align: left;'>text here</p>");

}
}


    return L.marker(feature.latLng,{icon:whichIcon}).bindPopup(popupContent).on("click",markerOnClick);




})
);

  // Add the layer to the map.
  geoLayer.addTo(firstMap);
  // Redraw the map so that all the markers are visible.
  firstMap.fitBounds(geoLayer.getBounds());
  // Zoom out one level to give some padding.
  firstMap.zoomOut(1);
});
