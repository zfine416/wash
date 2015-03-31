var CityFormView = Backbone.View.extend({
	events: {
		"change select": "test"
	},
	test: function(event){
		var city = event.target.value;

		$.ajax({
			url: '/users/open',
			data: {
				city: city
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
	var $div = $("<div class = 'block'>");
	var $ul = $("<ul class = 'list'></ul>");
	$div.append($ul);
	$ul.append("<li>First Name: " + employee.first_name + "</li>");
	$div.append("<button class= select>" + "Select" + "</button>" )
	$("body").append($div);
	});	
}

