
$(document).ready(function(){
	$(".content").hide();
	$(".dropdown").hide();
	$("#content_home").show();
})

function showContent(content){
	$(".content").hide();
	$("#"+content).show();
}
function showDropdown(buttons){
	$("#"+buttons).show("fast");
}
function hideDropdown(){
	$(".dropdown").hide("fast");
}
function toggleDropdown(buttons){

	$("#"+buttons).toggle("fast");
}
