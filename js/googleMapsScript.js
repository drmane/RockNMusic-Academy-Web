 var myCenter=new google.maps.LatLng(40.453473, -3.732690);
      
function loadGoogleMaps() {
  var mapProp = {
    center:myCenter,
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    disableDefaultUI:true,
    panControl:true,
    zoomControl:true
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  
  var marker=new google.maps.Marker({
  position:myCenter,
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', loadGoogleMaps);