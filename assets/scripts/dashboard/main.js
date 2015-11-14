require.config({
	baseUrl : '/scripts/dashboard',
	paths : {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'underscore': 'bower_components/underscore/underscore-min',
        'backbone' : 'bower_components/backbone/backbone-min',
        'moment' : 'bower_components/moment/min/moment.min',
        'router' : './router',
        'collections' : './collections',
        'views' : './views',
        'templates' : './templates',
        'models' : './models'
	}
});

require(
	[
		'jquery',
		'underscore',
		'backbone',
		'router'
	],
	function($, _, Backbone, Router){
		'use strict';

		window.Converge = {};
		Converge = window.Converge;

		//events
		Converge.events = _.extend({}, Backbone.Events);

		//router
		Converge.router = new Router();
	}
);