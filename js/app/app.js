var lat;
var long;
var map;


function initMap() {
//document.addEventListener("deviceready", onDeviceReady, false);
//}

//function onDeviceReady(){
document.getElementById("button").addEventListener("click", function(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(Posi);

  } function Posi(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    myCenter = new google.maps.LatLng(lat, long);
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: lat, lng: long },
      zoom: 8
    });

    var marker = new google.maps.Marker({
      position: myCenter,
      animation: google.maps.Animation.BOUNCE
    }

    );
    marker.setMap(map);


    google.maps.event.addListener(marker, 'click', function () {
      var pos = map.getZoom();
      map.setZoom(9);
      map.setCenter(marker.getPosition());
      window.setTimeout(function () { map.setZoom(pos); }, 3000);
    });
  }

});

 
}