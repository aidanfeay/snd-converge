
define( ['jquery','underscore', 'backbone', 'views/event', 'views/local','views/topic'] , function($, _, Backbone, EventView, LocalView, TopicView){

	'use strict';

	var Workspace = Backbone.Router.extend({

		routes : {
			"platform/event/:event" : "event",
			"platform/event(/)" : "randomizeEvent",
			"platform/local(/)" : "local",
			"platform/topic(/)" : "topic"

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
		},

		topic: function() {
			new TopicView();
		}


	});
	return Workspace;
});