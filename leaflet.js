let firstMap, tileLayer, geojson, points;
firstMap = L.map("first-map");
tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
});
// tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
//               attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
//               subdomains: "abcd",
//               maxZoom: 18
//               });
tileLayer.addTo(firstMap);
geojson = [
{ "type": "Feature", "properties": { "id": 0, "student": "Soleil" }, "geometry": { "type": "Point", "coordinates": [ -73.99850136760945, 40.727528264537703 ] } },
{ "type": "Feature", "properties": { "id": 1, "student": "Ben" }, "geometry": { "type": "Point", "coordinates": [ -73.991422114751941, 40.723134067373877 ] } },
{ "type": "Feature", "properties": { "id": 2, "student": "Amelia" }, "geometry": { "type": "Point", "coordinates": [ -73.979631906567903, 40.722617016586867 ] } },
{ "type": "Feature", "properties": { "id": 3, "student": "Tamar" }, "geometry": { "type": "Point", "coordinates": [ -73.997804771173108, 40.725073266498192 ] } },
{ "type": "Feature", "properties": { "id": 4, "student": "Claire" }, "geometry": { "type": "Point", "coordinates": [ -74.000344420317035, 40.721213883132229 ] } },
{ "type": "Feature", "properties": { "id": 5, "student": "Nikita" }, "geometry": { "type": "Point", "coordinates": [ -73.992987427668822, 40.740441931973194 ] } },
{ "type": "Feature", "properties": { "id": 6, "student": "Julia" }, "geometry": { "type": "Point", "coordinates": [ -74.005858063198986, 40.712591339627629 ] } },
{ "type": "Feature", "properties": { "id": 8, "student": "Jade" }, "geometry": { "type": "Point", "coordinates": [ -73.969305852986537, 40.754463521201224 ] } },
{ "type": "Feature", "properties": { "id": 9, "student": "Justin" }, "geometry": { "type": "Point", "coordinates": [ -74.006143893831634, 40.735516392945037 ] } },
{ "type": "Feature", "properties": { "id": 10, "student": "Anaya" }, "geometry": { "type": "Point", "coordinates": [ -73.992853038911136, 40.731202141658649 ] } },
{ "type": "Feature", "properties": { "id": 11, "student": "Vanessa" }, "geometry": { "type": "Point", "coordinates": [ -73.986627366022077, 40.759238573296791 ] } },
{ "type": "Feature", "properties": { "id": 12, "student": "Ashlyn" }, "geometry": { "type": "Point", "coordinates": [ -74.006213802148309, 40.73026700569271 ] } }
];
points = L.geoJSON(geojson, {
                  onEachFeature: function(f, l){
                    if (f.properties && f.properties.student){
                      l.bindPopup("<h2>" + f.properties.student + "</h2>");
                    }
                  }
}).addTo(firstMap);
firstMap.fitBounds(points.getBounds());
