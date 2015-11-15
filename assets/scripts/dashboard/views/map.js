
define(
	[
		'jquery',
		'underscore',
		'backbone',
		'leaflet',
	] , function(
		$,
		_,
		Backbone,
		L
	){

	'use strict';

	var View = Backbone.View.extend({

		mapTileLayer: null,
		map: null,
		defaultCenter: [30.247770, -97.737096],

		initialize : function(detailsArray, id, zoom){
			this.initializeMapTiles();
			var center = detailsArray.length === 1 ? detailsArray[0].coordinates : this.defaultCenter;
			this.map = L.map(id).setView(center, zoom);
			this.mapTileLayer.addTo(this.map);

			_.each(detailsArray, function(details) {
				L.marker(details.coordinates).addTo(this.map)
			    .bindPopup(details.name+'<br/>'+details.location)
			    .openPopup();
			 }, this);
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