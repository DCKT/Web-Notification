function raiseNotification(){
  var title = document.getElementById('notifTitle').value;
  var content = document.getElementById('notifContent').value;

  // FIREFOX

  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  if (window.Notification && Notification.permission === "granted") {
    var n = new Notification(title, {body: content});
  }

  // CHROME

  return false;
}
