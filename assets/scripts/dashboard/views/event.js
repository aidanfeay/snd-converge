
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'text!templates/eventUser.html',
		'text!templates/eventDetails.html',
		'moment',
		'leaflet'
	] , function(
		$,
		_,
		Backbone,
		eventUserTemplate,
		eventDetailsTemplate,
		Moment,
		L
	){

	'use strict';

	var View = Backbone.View.extend({
		selectors :{
			eventDetails: 'event-details',
			userList : 'user-list',
			map: 'event-map'
		},
		templates : {
			user : _.template(eventUserTemplate),
			details : _.template(eventDetailsTemplate)
		},

		mapTileLayer: null,

		initialize : function(eventSlug){
			this.event = Converge.events.findWhere({slug:eventSlug});
			if (!this.mapTileLayer) {
				this.initializeMapTiles();
			}
			if (this.event) {
				this.setupDetails();
				this.setupUserList();
			} else {
				this.setupDetails({name:"404 Event Not Found"});
			}
		},

		setupUserList: function() {
			Converge.users.each(function(user){
				var userHtml = this.templates.user(user.attributes);
				$('#' + this.selectors.userList).append(userHtml);
			}, this);
		},

		setupDetails: function(details) {
			if (_.isUndefined(details) || !details){
				details = this.event.attributes;
			}

			var eventDetails = this.templates.details({
				name : details.name,
				startTime : this.dateTime(details.startTime),
				endTime: this.dateTime(details.endTime)
			});
			$('#' + this.selectors.eventDetails).append(eventDetails);

			// setup map
			this.map = L.map(this.selectors.map).setView(details.coordinates, 13);
			this.mapTileLayer.addTo(this.map);
			L.marker(details.coordinates).addTo(this.map)
			    .bindPopup(details.name+'<br/>'+details.location)
			    .openPopup();
		},

		dateTime: function(ts){
			var time = Moment.unix(ts);
			time.local();
			return time.format('LT / MMMM Do');
		},

		initializeMapTiles: function() {
			this.mapTileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			    maxZoom: 18,
			    id: 'joshkadis.o61c5664',
			    accessToken: 'pk.eyJ1Ijoiam9zaGthZGlzIiwiYSI6ImNpaDBsbG1rZzB3bjJ2a201eXY4YzlhMnIifQ.YA0hpf_w8bJgwrLNmZDE-Q'
			});
		}

	});
	return View;
});