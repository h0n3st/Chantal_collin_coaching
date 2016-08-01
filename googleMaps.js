
$(document).ready(function(){

	initialize();
})

function initialize(){
	var myLatLng = new google.maps.LatLng(45.490091, -73.490257);
  var parkingLatLng = new google.maps.LatLng(45.492302, -73.488280);
	var mapProp = {
    center: myLatLng,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
  	
  	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  	var bureauMarker = new google.maps.Marker({
  		position: myLatLng,
  		map:map,
      title: 'Mon bureau'
  	});
    var bureauContenu = '<h4>Mon bureau</h4>'
                    +'<p>54 boul. Churchill, Greenfield Park, J4V 2L9</p>';
    var bureauInfo = new google.maps.InfoWindow({
          content: bureauContenu
        });

    bureauMarker.addListener('click', function() {
          bureauInfo.open(map, bureauMarker);
        });


    var parkingIcon = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
    var parkingMarker = new google.maps.Marker({
      position: parkingLatLng,
      icon : parkingIcon,
      map:map,
      title: 'Stationnement gratuit'
    });
    var parkingContenu = '<h4>Stationnement public à proximité</h4>'
                    +"<p>VPour les formations d'une journée, je vous invite à utiliser ce stationnement gratuit facile d'accès à côté de mon bureau</p>";
    var parkingInfo = new google.maps.InfoWindow({
          content: parkingContenu
        });

    parkingMarker.addListener('click', function() {
          parkingInfo.open(map, parkingMarker);
        });

}

