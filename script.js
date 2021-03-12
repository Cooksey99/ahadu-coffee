// JavaScript Document
//this function generates Google Maps
function initMap() {
	const ahaduCoffee = {
		lat: 38.9392898, lng: -94.376208
	};
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: ahaduCoffee,
	});
	const marker = new google.maps.Marker({
		position: ahaduCoffee,
		map: map,
	});
}