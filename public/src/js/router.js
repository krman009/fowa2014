function Router($routeProvider) {
	$routeProvider
	.when('/inbox', {
		templateUrl: 'views/mailbox.html',
		controller: 'InboxCtrl as vm',
		resolve: InboxCtrl.resolve
	})
	.when('/sent', {
		templateUrl: 'views/mailbox.html',
		controller: 'SentCtrl as vm',
		resolve: SentCtrl.resolve
	})
	.when('/email/:id', {
		templateUrl: 'views/email.html',
		controller: 'EmailCtrl as vm',
		resolve: EmailCtrl.resolve
	})
	.otherwise({
		redirectTo: 'inbox'
	});
};

angular
	.module('app')
	.config(Router);