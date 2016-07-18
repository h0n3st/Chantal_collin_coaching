
$(document).ready(function(){

	initialize();
})

function initialize(){
	var myLatLng = new google.maps.LatLng(45.490091, -73.490257);
	var mapProp = {
    center: myLatLng,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
  	
  	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  	var marker = new google.maps.Marker({
  		position: myLatLng,
  		map:map,
      title: 'Mon bureau'
  	});
    var contenu = '<h4>Mon bureau</h4>'
                    +'<p>54 boul. Churchill, Greenfield Park, J4V 2L9</p>';
    var infowindow = new google.maps.InfoWindow({
          content: contenu
        });

    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}

