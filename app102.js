const map = L.map('map', {
    zoomControl: false
}).setView(l1_2[10], 18);
L.control.scale({
    position: 'topleft'
}).addTo(map);
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

const sidepanelRight = L.control.sidepanel('mySidepanelRight', {
    panelPosition: 'right',
    tabsPosition: 'top',
    pushControls: true,
    darkMode: false,
    startTab: 2
}).addTo(map);



var newIcon = L.icon({
    iconUrl: 'style-image/cross.svg',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 120] // point from which the popup should open relative to the iconAnchor
});


var endIcon = L.icon({
    iconUrl: 'icon-image/end-icon-02.svg',

    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [20, 58], // point of the icon which will correspond to marker's location
    popupAnchor:  [8, -40] // point from which the popup should open relative to the iconAnchor
});

var startIcon = L.icon({
    iconUrl: 'icon-image/start-icon-04.svg',

    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});



L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    L.marker(l1_1[0],{icon: endIcon}).addTo(map)
    .bindPopup('<h3>前往 大直市場</h3><p>在此可以找到 (1-3) 路線</p>',{
        autoClose: false,
        autoPan: true
    })
    .openPopup();



var popStart =L.popup({closeButton: false, autoClose: false})
.setContent('<span style="font-size:30px">&#9786;</span><h3>由此開始</h3>')





var l12 = L.polyline(l1_2, { color: "rgb(0,0,220)" }).addTo(map);


    var circleOptions = {
        color: 'black',  // Color of the circle outline
        fillColor: 'rgb(202	197	192',  // Color of the circle fill
        fillOpacity: 0.5,  // Opacity of the circle fill
        radius: 2  // Radius of the circle in meters
    };
    
    // Create a circle and add it to the map
    var circle = L.circle(l1_1[6], circleOptions).addTo(map)
    .bindPopup('<div class="wrapper"><p style="font-size:16px;"><span style="font-size: 20px;">&#10033;</span>通行大型路口</p> </div>'
    ,{closeButton: true, autoClose: false, className: "c-popup",offset: [0,-20],closeOnClick: false})
    .openPopup();
    var circle2 = L.circle(l1_1[0], circleOptions).addTo(map)
    .bindPopup(popStart)
    .openPopup();
    var circle3 = L.circle(l1_1[l1_1.length-1], circleOptions).addTo(map)
    .bindPopup(popStart)
    .openPopup();

;



