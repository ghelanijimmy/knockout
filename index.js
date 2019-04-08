function WebmailViewModel() {
  // DATA
  let self = this;
  self.folders = ["Inbox", "Archive", "Sent", "Spam"];
  self.chosenFolderId = ko.observable();

  // Behaviours
  self.goToFolder = folder => {
    self.chosenFolderId(folder);
  };
}

ko.applyBindings(new WebmailViewModel());
