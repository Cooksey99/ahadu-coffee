// JavaScript Document
//this function generates Google Maps
function initMap() {
	const ahaduCoffee = {
		lat: 38.93940481483486, lng: -94.37633942221444
	};
	const map = new google.maps.Map(document.getElementById("googleMaps"), {
		zoom: 10,
		center: ahaduCoffee,
	});
	//create the marker
	const marker = new google.maps.Marker({
		position: ahaduCoffee,
		map: map,
	});
}
