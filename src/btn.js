new L.cascadeButtons([
    { icon: 'fa-solid fa-location-crosshairs fa-2xl', ignoreActiveState: true, command: () => { showPosition() } },
    { icon: 'fa-solid fa-route fa-2xl', ignoreActiveState: true, command: () => { resetMapView() } }


], { position: 'topleft', direction: 'vertical' }).addTo(map);



function resetMapView(){
    map.setView([25.07939, 121.54508], 18); // 使用獲取到的經緯度設置地圖中心點
}



function showPosition() {


    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        // 設定地圖的中心點
        map.setView([latitude, longitude], 18); // 使用獲取到的經緯度設置地圖中心點
        // userPos=[latitude,longitude];

        var currentPos = L.popup({closeButton: false, autoClose: true, className: "c-popup"})
        .setLatLng([latitude,longitude])
        .setContent('<p>目前位置</p>')
        .openOn(map);

        L.marker([latitude,longitude]).addTo(map);



      });
}


