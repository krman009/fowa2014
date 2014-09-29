function MailboxFactory ($http) {

	var exports = {};

	exports.data = {
		unreadCount: 0,
		sentEmails: {},
		loadedEmail: {}
	};

	exports.searchTerm = {};

	exports.getEmail = function( id ) {
		return exports.data.loadedEmail = $http({
			method: 'GET',
			url: '/rest/emails/' + id + '.json'
		});
	};

	exports.getSentEmails = function( ) {
		return exports.data.sentEmails = $http({
			method: 'GET',
			url: '/rest/sent.json'
		});
	};

	exports.getInboxEmails = function( ) {
		var emails = exports.data.inboxEmails || (exports.data.inboxEmails = $http({
			method: 'GET',
			url: '/rest/inbox.json'
		}));
		return emails;
	};

	return exports;
}

angular
	.module('app')
	.factory('MailboxFactory', MailboxFactory);