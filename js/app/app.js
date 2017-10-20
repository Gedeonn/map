
//A function that will be called in order to get the current  
//location and display it on the google map
function initMap() {

//Listening to check if the button was clicked or not clicked
document.getElementById("button").addEventListener("click", function(){

//Getting the current location of the person and feeding the data into the google map
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

    //Adding the marker to the map
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