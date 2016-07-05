
$(document).ready(function(){
	$(".content").hide();
	$("#content_home").show();
})

function showContent(content){
	$(".content").hide();
	$("#"+content).show();
}
