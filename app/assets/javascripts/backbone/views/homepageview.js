var SignIn = Backbone.View.extend({
	events: {
		"click .login": "toggleForm"
	}, 
	initialize: function(){
		$(this.$el.find(".loginform")).hide();
	},
	toggleForm: function(){
		$(".register").fadeToggle();
		$(".notice").hide();
		$(".loginform").slideToggle();
	}
})

