const map = L.map('map', {
    zoomControl: false
}).setView([25.07939, 121.54508], 18);
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


var userPos=[25.083849245552813,121.54559165239336];
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// icon style 

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

    L.marker(l1_1[l1_1.length-1],{icon: endIcon}).addTo(map)
    .bindPopup('前往 圖書館 <br> 在此可以找到 (1-2) 路線',{
        autoClose: false
    })
    .openPopup()
    .bindTooltip('<i class="fa-solid fa-sun fa-2xl"></i> <i class="fa-solid fa-newspaper fa-2xl"></i>' );


// L.marker( l1_1[0] ,{icon: startIcon}).addTo(map)
// .bindPopup('<i class="fa-solid fa-face-grin-wink fa-2xl" style="color: #0056d6;"></i> <i class="fa-solid fa-arrow-right fa-2xl" style="color: #0056d6;"></i><h3>由此開始</h3> ',{closeButton:false,
//      autoClose: false})
// .openPopup()
// ;

var popStart =L.popup({closeButton: false, autoClose: false})
.setContent('<i class="fa-solid fa-face-grin-wink fa-2xl" style="color: #0056d6;"></i> <i class="fa-solid fa-arrow-right fa-2xl" style="color: #0056d6;"></i><h3>由此開始</h3>')





var l11 = L.polyline(l1_1, { color: "rgb(0,0,220)" }).addTo(map);

// var popup2 = L.popup({closeButton: false, autoClose: false, className: "c-popup"})
//     .setLatLng(l1_1[6])
//     .setContent('<div class="wrapper"><p>大路口過馬路</p> </div>')
//     .openOn(map);


    var popup3 = L.popup({closeButton: true, autoClose: false, className: "another-popup"})
    .setLatLng(l1_1[10])
    .setContent('<div class="wrapper"><p>Some Other Text.</p> </div>')
    .openOn(map);

    var circleOptions = {
        color: 'red',  // Color of the circle outline
        fillColor: '#f03',  // Color of the circle fill
        fillOpacity: 0.5,  // Opacity of the circle fill
        radius: 2  // Radius of the circle in meters
    };
    
    // Create a circle and add it to the map
    var circle = L.circle(l1_1[6], circleOptions).addTo(map)
    .bindPopup('<div class="wrapper"><p>大路口過馬路</p> </div>',{closeButton: false, autoClose: false, className: "c-popup",offset: [0,-20]})
    .openPopup();
    var circle2 = L.circle(l1_1[0], circleOptions).addTo(map)
    .bindPopup(popStart)
    .openPopup();
    var circle3 = L.circle(l1_1[l1_1.length-1], circleOptions).addTo(map)
;



