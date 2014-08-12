function raiseNotification(title, content) {
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

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('notificationForm').onsubmit = function(e) {
    e.preventDefault();
    var title = document.getElementById('notifTitle').value;
    var content = document.getElementById('notifContent').value;
    
    raiseNotification(title, content);
  };
});



