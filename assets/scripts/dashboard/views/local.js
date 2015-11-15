
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/map'
	] , function(
		$,
		_,
		Backbone,
		MapView
	){

	'use strict';

	var View = Backbone.View.extend({

		eventDetails : [],

		initialize : function(){
			Converge.events.each(function(model){
				this.eventDetails.push(model.attributes);
			}, this);
			new MapView( this.eventDetails, 'local-map', 13);
		}

	});
	return View;
});