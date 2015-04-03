// geocoder = new google.maps.Geocoder();
var CityFormView = Backbone.View.extend({
	events: {
		"change select": "test",
		"submit form": "test"
	},
	test: function(event){
		event.preventDefault();
		var address = event.target.elements.address.value;
		codeAddress(address);

		$.ajax({
			url: '/users/employees',
			data: {
				city: address
			},
			dataType: 'json',
			success: function(data){
				renderData(data);
			}
		})
		console.log("working");
	}
})

function renderData(data){
	$(".block").hide();
	
	
	// var $li = $("<li class = 'items'></li>");
	$( data ).each(function( index, employee ) {
	// 	// debugger;
	// 	// console.log(employee);
	// 	// debugger;
	var $div = $("<div class = 'block'>").fadeIn();
	var $ul = $("<ul class = 'list'></ul>");
	$div.append($ul);
	$ul.append("<li>First Name: " + employee.first_name + "</li>");
	$div.append("<button class= select>" + "Select" + "</button>" )
	$("body").append($div);
});	
}

var map;

function initialize(location){
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
	var mapOptions = {
		zoom: 15,
		center: latlng
	}
	
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title:"hello"
	});
}

function codeAddress(address) {
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
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








