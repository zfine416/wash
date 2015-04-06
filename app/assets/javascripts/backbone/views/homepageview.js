var SignIn = Backbone.View.extend({
	events: {
		"click .right": "toggleForm",
		"click .cities": "ajaxcity"
	}, 
	initialize: function(){
		$(this.$el.find(".loginform")).hide();
	},
	toggleForm: function(){
		$(".register").fadeToggle();
		$(".notice").hide();
		$(".loginform").slideToggle();
	},
	ajaxcity: function(){
		debugger;
		window.city = this.val();
	}

})

