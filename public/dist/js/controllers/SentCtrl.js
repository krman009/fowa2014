function SentCtrl($$getSent) {
	var vm = this;
	vm.items = $$getSent.data;
}

SentCtrl.resolve = {
	'$$getSent': function (MailboxFactory) {
		return MailboxFactory.getSentEmails();
	}
};

angular
	.module('app')
	.controller('SentCtrl', SentCtrl);