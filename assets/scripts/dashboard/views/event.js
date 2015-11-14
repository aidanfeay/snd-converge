
define( ['jquery','underscore', 'backbone'] , function($, _, Backbone){

	'use strict';

	var View = Backbone.View.extend({
		selectors :{
			eventDetails: '#event-details',
			userList : '#user-list'
		},
		templates : {
			user : _.template("<li><%= name %></li>"),
			details : _.template('<h1><%= name %></h1>')
		},

		initialize : function(eventSlug){
			this.event = Converge.events.findWhere({slug:eventSlug});
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
				$(this.selectors.userList).append(userHtml);
			}, this);
		},

		setupDetails: function(details) {
			if (_.isUndefined(details) || !details){
				details = this.event.attributes;
			}
			var eventDetails = this.templates.details(details);
			$(this.selectors.eventDetails).append(eventDetails);
		}

	});
	return View;
});