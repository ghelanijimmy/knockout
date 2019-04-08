function WebmailViewModel() {
  // DATA
  let self = this;
  self.folders = ["Inbox", "Archive", "Sent", "Spam"];
}

ko.applyBindings(new WebmailViewModel());
