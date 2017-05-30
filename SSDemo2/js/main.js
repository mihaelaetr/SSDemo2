$(document).ready(function() {

	// Home page slider
	$(".slideGallery > div:gt(0)").hide();
		setInterval(function() { 
		$('.slideGallery> div:first')
	    .fadeOut(2000)
	    .next()
	    .fadeIn(2000)
	    .end()
	    .appendTo('.slideGallery');
	},  3000);

	// Landscape gallery
	var imgCodes = [1,2,3,4,5,6,7,8,9],
	hoverCodes=[["Canon 700D;ISO 100;17 mm;f/22;0,6 sec"],["Canon 700D;ISO 100;16 mm;f/11;13 sec"],["Canon 700D;ISO 100;26 mm;f/16;1/40 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec;Panorama"],["Canon 700D;ISO 100;17 mm;f/18;1/160 sec"],["Canon 700D;ISO 100;20 mm;f/13;1/160 sec"],["Canon 700D;ISO 100;24 mm;f/4;1/125sec"],["Canon 700D;ISO 100;16 mm;f/16;1,3 sec"],["Canon 700D;ISO 200;17 mm;f/4;1/160 sec"]],
	hoverCodesStr,
	hoverCodesArr;
		for(var i=0; i<imgCodes.length; i++){
			$('.landscapes-gallery').append('<figure id="imgId'+imgCodes[i]+'" class="gal-item"><img src="../landscapes/'+imgCodes[i]+'.jpg" /><figcaption class="l-gal"></figcaption></figure>');
			hoverCodesStr = hoverCodes[i][0];
			hoverCodesArr = hoverCodesStr.split(';');

			for(k=0; k<hoverCodesArr.length; k++){
				if(k==0){
					$('#imgId'+imgCodes[i]).find('.l-gal').append('<h3>'+hoverCodesArr[k]+'</h3>');
				}else{
					$('#imgId'+imgCodes[i]).find('.l-gal').append('<p>'+hoverCodesArr[k]+'</p>');
				}
			}
		}

	// Portrait gallery
	var imgCodes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
	hoverCodes=[["Canon 700D;ISO 100;135 mm;f/2;1/160 sec"],["Canon 700D;ISO 100;16 mm;f/11;13 sec"],["Canon 700D;ISO 100;26 mm;f/16;1/40 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;20 mm;f/13;6 sec"],["Canon 700D;ISO 100;17 mm;f/18;1/160 sec"],["Canon 700D;ISO 100;20 mm;f/13;1/160 sec"],["Canon 700D;ISO 100;24 mm;f/4;1/125sec"],["Canon 700D;ISO 100;16 mm;f/16;1,3 sec"],["Canon 700D;ISO 200;17 mm;f/4;1/160 sec"]],
	hoverCodesStr,
	hoverCodesArr;
		for(var i=0; i<imgCodes.length; i++){
			$('.portraits-gallery').append('<figure id="imgId'+imgCodes[i]+'" class="gal-item"><img src="../portraits/'+imgCodes[i]+'.jpg" /><figcaption class="p-gal"></figcaption></figure>');
			hoverCodesStr = hoverCodes[i][0];
			hoverCodesArr = hoverCodesStr.split(';');

			for(k=0; k<hoverCodesArr.length; k++){
				if(k==0){
					$('#imgId'+imgCodes[i]).find('.p-gal').append('<h3>'+hoverCodesArr[k]+'</h3>');
				}else{
					$('#imgId'+imgCodes[i]).find('.p-gal').append('<p>'+hoverCodesArr[k]+'</p>');
				}
			}
		}
	});