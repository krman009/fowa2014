function AppCtrl($location, $rootScope, MailboxFactory) {

	var vm = this;

	// variables
	vm.inboxData = MailboxFactory.data;
	vm.unread = {};
	vm.searchTerm = '';

	// methods
	vm.composeEmail = composeEmail;
	vm.onSearchChange = onSearchChange;
	vm.getClass = getClass;

	function composeEmail() {
		$rootScope.$broadcast('compose:show');
	}

	function onSearchChange() {
		MailboxFactory.searchTerm.data = vm.searchTerm;
		if ($location.$$url !== '/inbox') {
			$location.url('/inbox');
		}
	}

	function getClass(name) {
		return {
			'nav__list--active': name === $location.$$url
		};
	}

	// resolves
	MailboxFactory
	.getInboxEmails()
	.then(function (response) {
		vm.unread.count = 0;
		for (var prop in response.data) {
			if (!response.data[prop].read) {
				vm.unread.count++;
			}
		}
	}, function (reason) {
		// handle errors
	});
}

angular
	.module('app')
	.controller('AppCtrl', AppCtrl);