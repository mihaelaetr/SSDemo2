$(document).ready(function() {

	$(".slideGallery > div:gt(0)").hide();

		setInterval(function() { 
		$('.slideGallery> div:first')
	    .fadeOut(2000)
	    .next()
	    .fadeIn(2000)
	    .end()
	    .appendTo('.slideGallery');
	},  3000);

	});