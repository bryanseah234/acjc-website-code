var pw = 0;
var ph = 0;
$(function(){
	resizeBanner();
	$(".mobilemenu").click(function(){
		$(".sitemenu_area").slideDown("2000");
	});
	
	if (parseInt($(window).width())<=800) {
		$(".updates-body-cnt").show();
	}
	else
	{	$(".updates-body-cnt").hide();	}
});

function resizeBanner() {
	var windowWidth = parseInt($(window).width())-20;
	if (windowWidth>1024) {
	  pw = 1024;
	  ph = 547;
	}
	else {
	  var height = Math.floor((windowWidth/1024)*547);
	  pw = windowWidth;
	  ph = height;	  
	}	
}