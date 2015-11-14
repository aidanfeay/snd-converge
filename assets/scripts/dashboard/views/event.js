
define( ['jquery','underscore', 'backbone'] , function($, _, Backbone){

	'use strict';

	var View = Backbone.View.extend({

		userListEl : null,
		userTemplate : _.template("<li><%= name %></li>"),

		initialize : function(){
			this.userListEl = document.getElementById('user-list');
			this.setupUserList();
		},

		setupUserList: function() {
			Converge.users.each(function(user){
				var userHtml = this.userTemplate(user.attributes);
				$(this.userListEl).append(userHtml);
			}, this);
		}

	});
	return View;
});