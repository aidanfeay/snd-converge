require.config({
	baseUrl : '/scripts/dashboard',
	paths : {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'underscore': 'bower_components/underscore/underscore-min',
        'backbone' : 'bower_components/backbone/backbone-min',
        'text' : 'bower_components/text/text',
        'moment' : 'bower_components/moment/min/moment.min',
        'router' : './router',
        'collections' : './collections',
        'views' : './views',
        'templates' : './templates',
        'models' : './models',
        'data' : './data'
	}
});

require(
	[
		'jquery',
		'underscore',
		'backbone',
		'router',
		'views/event',
		'text!data/users.json',
		'text!data/topics.json',
		'text!data/events.json'
	],
	function($, _, Backbone, Router, EventPage, Users, Topics, Events){
		'use strict';

		window.Converge = {};
		Converge = window.Converge;

		//events
		Converge.events = _.extend({}, Backbone.Events);


		// Users collection
		Converge.users = new Backbone.Collection();
		Converge.users.add( JSON.parse( Users ) );

		// Events collection
		Converge.events = new Backbone.Collection();
		Converge.events.add( JSON.parse( Events ) );

		//router
		Converge.router = new Router();
	}
);