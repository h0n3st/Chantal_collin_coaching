
$(document).ready(function(){



	/*$(".content").hide();
	$("#content_home").show();
	$(".dropdown").hide();*/



})

function showContent(content){
	$(".content").hide();
	$("#"+content).show();
}
function showDropdown(buttons){
	$("#"+buttons).slideDown("fast");
}
function hideDropdown(){
	$(".dropdown").slideUp("fast");
}
function toggleDropdown(buttons){

	$("#"+buttons).slideToggle("fast");
}

