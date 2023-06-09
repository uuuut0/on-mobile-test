var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.setView([25.0798, 121.54712],
    19);



// var marker = L.marker([25.0798, 121.54712]).addTo(map);
const panelRight = L.control.sidepanel('panelID', {
    panelPosition: 'right',
    hasTabs: false,
    tabsPosition: 'top',
    pushControls: true,
    darkMode: true,
    startTab: 'tab-5'
  }).addTo(map);