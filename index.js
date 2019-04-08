function WebmailViewModel() {
  // DATA
  let self = this;
  self.folders = ["Inbox", "Archive", "Sent", "Spam"];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();

  // Behaviours
  self.goToFolder = folder => {
    self.chosenFolderId(folder);
    $.get(
      "http://learn.knockoutjs.com/mail",
      { folder: folder },
      self.chosenFolderData
    );
  };

  // Show inbox by default
  self.goToFolder("Inbox");
}

ko.applyBindings(new WebmailViewModel());
