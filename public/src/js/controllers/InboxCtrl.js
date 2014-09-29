function InboxCtrl(MailboxFactory, $$getInbox) {
	var vm = this;
	vm.items = $$getInbox.data;
	vm.searchTerm = MailboxFactory.searchTerm;
}

InboxCtrl.resolve = {
	'$$getInbox': function (MailboxFactory) {
		return MailboxFactory.getInboxEmails();
	}
};

angular
	.module('app')
	.controller('InboxCtrl', InboxCtrl);