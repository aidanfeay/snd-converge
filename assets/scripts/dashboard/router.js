
define( ['jquery','underscore', 'backbone'] , function($, _, Backbone){

	'use strict';

	var Workspace = Backbone.Router.extend({

		routes : {

		},

		initialize : function(){
			Backbone.history.start({pushState: true});

		}

	});
	return Workspace;
});