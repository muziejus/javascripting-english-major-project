let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.73357, -73.97659],16);
let startLoc, secLoc, startLocMarker, secLocMarker,thirdLoc, thirdLocMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline, walk;
startLoc = L.latLng(40.73357, -73.97659);
startLocMarker = L.marker(startLoc).addTo(firstMap);
secLoc = L.latlng(40.73266,-73.97449);
secLocMarker = L.marker(secLoc).addTo(firstMap);
thirdLoc = L.latLng(40.73097,-73.97397);
thirdLocMarker = L.marker(thirdLoc).addTo(firstMap);
walk = [[40.7330704,-73.9783955],[40.732661,-73.9767307]];
thousandthPolyline = L.polyline(walk, {color: "#d33682"}
                  ).addTo(firstMap);
