$(document).ready(function() {
  var events;

  // This function grabs schedule eventss from the database and updates the view
  function getSchedule() {
    $.get("/api/schedule", function(data) {
      console.log("Schedule:", data);
      events = data;
      if (!events || !events.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete eventss
  function deleteEvents(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/schedule/" + id
    }).then(function() {
      getSchedule();
    });
  }

  // Getting the initial list of eventss
  getSchedule();
});
