
$(document).ready(function(){

	initialize();
})

function initialize(){
	var myLatLng = new google.maps.LatLng(45.5017,-73.5673);
	var mapProp = {
    center: myLatLng,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
  	
  	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  	var marker = new google.maps.Marker({
  		position: myLatLng,
  		map:map,
  	});
}

