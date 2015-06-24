$(document).ready(function() {

	$(".balloon").click(function(){
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
	});

});
