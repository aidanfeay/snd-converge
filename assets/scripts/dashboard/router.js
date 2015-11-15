
define( ['jquery','underscore', 'backbone', 'views/event', 'views/local'] , function($, _, Backbone, EventView, LocalView){

	'use strict';

	var Workspace = Backbone.Router.extend({

		routes : {
			"platform/event/:event" : "event",
			"platform/event(/)" : "randomizeEvent",
			"platform/local(/)" : "local"

		},

		initialize : function(){
			Backbone.history.start({pushState: true});
		},

		// show event based on route to slug
		event: function(route) {
			new EventView(route);
		},

		// platform/event returns a random event from the collection
		randomizeEvent: function() {
			var eventSlugs = Converge.events.pluck('slug');
			this.event(_.sample(eventSlugs, 1)[0]);
		},

		local: function() {
			new LocalView();
		}

	});
	return Workspace;
});