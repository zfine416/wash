// geocoder = new google.maps.Geocoder();
var CityFormView = Backbone.View.extend({
	events: {
		"submit .main": "miami",
		"submit .la": "losangeles",
		"submit .ny": "newyork"
	},
	miami: function(event){
		event.preventDefault();
		var address = event.target.elements.address.value;
		codeAddress(address);
		// debugger;
		$.ajax({
			url: '/users/miami', //document.location.hash.substring(1),
			data: {
				city: address
			},
			dataType: 'json',
			success: function(data){
				console.log(data);
				renderMarkers(data);
			}
		})
		console.log("working");
	},
	losangeles: function(event){
		event.preventDefault();
		var address = event.target.elements.address.value;
		codeAddress(address);
		// debugger;
		$.ajax({
			url: '/users/losangeles', //document.location.hash.substring(1),
			data: {
				city: address
			},
			dataType: 'json',
			success: function(data){
				console.log(data);
				renderMarkers(data);
			}
		})
		console.log("working");
	},
	newyork: function(event){
		event.preventDefault();
		var address = event.target.elements.address.value;
		codeAddress(address);
		// debugger;
		$.ajax({
			url: '/users/newyork', //document.location.hash.substring(1),
			data: {
				city: address
			},
			dataType: 'json',
			success: function(data){
				console.log(data);
				renderMarkers(data);
			}
		})
		console.log("working");
	}
})

// function renderData(data){
// 	$(".block").hide();


// 	// var $li = $("<li class = 'items'></li>");
// 	$( data ).each(function( index, employee ) {
// 	// 	// debugger;
// 	// 	// console.log(employee);
// 	// 	// debugger;
// 	var $div = $("<div class = 'block'>").fadeIn();
// 	var $ul = $("<ul class = 'list'></ul>");
// 	$div.append($ul);
// 	$ul.append("<li>First Name: " + employee.first_name + "</li>");
// 	$div.append("<button class= select>" + "Select" + "</button>" )
// 	$("body").append($div);
// });	
// }

var map;

function renderMarkers(data){
	$( data ).each(function( index, employee ) {
		console.log(employee);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(employee.latitude, employee.longitude),
			map: map,
			title:"hello",
			icon: "http://skns.org.nz/wp-content/uploads/leaflet-maps-marker-icons/car-red.png"
		});
	})
}
function initialize(location){
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
	var mapOptions = {
		zoom: 15,
		center: latlng
	}
	
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// var marker = new google.maps.Marker({
	// 	position: latlng,
	// 	map: map,
	// 	title:"hello"
	// });
}

function codeAddress(address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				draggable:true,
				title: "DRAG ME!",
				position: results[0].geometry.location
			});
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}
$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(initialize);
})








