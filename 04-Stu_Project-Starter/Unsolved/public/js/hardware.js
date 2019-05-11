$(document).ready(function() {
  var light = 0;
  var temp;
  //Displaying the temperature data =====================
  function getLight() {
    $.get("/api/data/:mac_address/:light", function(data) {
      lightData = data;
      console.log(lightData);
      $lightContainer.empty();
      if (lightData === 0) {
        console.log("light is off");
        $lightContainer.push("OFF");
      } else if (lightData === 1) {
        console.log("light is on");
        $lightContainer.push("ON");
      } else {
        console.log("no light data found");
      }
    });
  }

  function displayLightStat(data) {
    $(".light-display").empty();
    $(".light-display").push();
  }

  $(document).on("click", ".light-btn", controlLight);

  function controlLight() {
    $.ajax({
      method: "PUT",
      url: "/api/data/light/:mac_address/:light",
      data: ripData.light
    }).then(getLight);
  }
});
