function EmailCtrl(MailboxFactory, $$getEmail) {
	var vm = this;
	vm.email = $$getEmail.data;
}

EmailCtrl.resolve = {
	'$$getEmail': function(MailboxFactory, $route) {
		return MailboxFactory.getEmail($route.current.params.id);
	}
};

angular
	.module('app')
	.controller('EmailCtrl', EmailCtrl);