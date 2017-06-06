// Calculate photoshoot
	var theForm = document.forms["photoform"];

	var photo_prices = new Array();
		photo_prices["Photo5"]=20;
		photo_prices["Photo10"]=30;
		photo_prices["Photo15"]=40;
		photo_prices["Photo20"]=50;
		function getPhotoPrice() {
			var photoPrice=0;
			var theForm = document.forms["photoform"];
			var selectedNumber = theForm.elements["selectednumber"];
			for(var i = 0; i < selectedNumber.length; i++) {
				if(selectedNumber[i].checked) {
					photoPrice = photo_prices[selectedNumber[i].value];
					break;
				}
			}
			return photoPrice;
		}

	var city_prices= new Array();
		city_prices["Sofia"]=0;
		city_prices["Plovdiv"]=20;
		city_prices["Varna"]=35;
		city_prices["Burgas"]=35;
		city_prices["Starazagora"]=30;
		function getCityPrice() {
			var CityPrice=0;
			var theForm = document.forms["photoform"];
			var selectedCity = theForm.elements["city"];
			CityPrice = city_prices[selectedCity.value];
			return CityPrice;
		}

	function secondPhotographerPrice() {
		var secondPhotographerPrice=0;
		var theForm = document.forms["photoform"];
		var secondPhotographer = theForm.elements["secondphotographer"];
		if(secondPhotographer.checked==true) {
			secondPhotographerPrice=35;
		}
		return secondPhotographerPrice;
	}

	function extraHourPrice() {
		var extraHourPrice=0;
		var theForm = document.forms["photoform"];
		var extraHour = theForm.elements["extrahour"];
		if(extraHour.checked==true) {
			extraHourPrice=30;
		}
		return extraHourPrice;
	}

	function studioPrice() {
		var studioPrice=0;
		var theForm = document.forms["photoform"];
		var studio = theForm.elements["studio"];
		if(studio.checked==true) {
			studioPrice=50;
		}
		return studioPrice;
	}

	function calculateTotal() {
		var photoShootPrice = getPhotoPrice() + getCityPrice() +
		secondPhotographerPrice() + extraHourPrice() + studioPrice();
		document.getElementById('total-price').innerHTML = "Total Price For Photoshoot: $" + photoShootPrice;
	}