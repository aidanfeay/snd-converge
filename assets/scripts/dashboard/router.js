
define( ['jquery','underscore', 'backbone'] , function($, _, Backbone){

	'use strict';

	var Workspace = Backbone.Router.extend({

		routes : {
			"event(/)" : "event"
		},

		initialize : function(){
			Backbone.history.start({pushState: true});

		},

		event: function() {
			console.log('event')
		}

	});
	return Workspace;
});