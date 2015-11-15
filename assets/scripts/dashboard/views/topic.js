
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/map',
		'text!templates/eventUser.html'
	] , function(
		$,
		_,
		Backbone,
		MapView,
		UserTemplate
	){

	'use strict';

	var View = Backbone.View.extend({

		eventDetails : [],

		initialize : function(){
			Converge.events.each(function(model){
				if (model.get('topics').indexOf('recycling') > -1){
					this.eventDetails.push(model.attributes);
				}
			}, this);
			new MapView( this.eventDetails, 'topic-map', 13);

			Converge.users.each(function(user){
				var template = _.template(UserTemplate);
				var userHtml = template(user.attributes);
				$('#user-list').append(userHtml);
			}, this);

		}

	});
	return View;
});