
define( ['jquery','underscore', 'backbone', 'views/event'] , function($, _, Backbone, EventView){

	'use strict';

	var Workspace = Backbone.Router.extend({

		routes : {
			"platform/event(/)" : "event"
		},

		initialize : function(){
			Backbone.history.start({pushState: true});
		},

		event: function() {
			new EventView();
		}

	});
	return Workspace;
});