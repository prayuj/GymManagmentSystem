$(document).ready(function() {
  function getCurrentMeasurements() {
    $.ajax({
      type: "POST",
      url:
        "https://letsgofitness.000webhostapp.com/serverside/getMeasurements.php",
      data: { loginID: JSON.parse(localStorage.getItem("user"))[0].loginID },
      success: function(data) {
        console.log(data);
        var measureObject = JSON.parse(data);
        $("#chest").text(measureObject[0].chest);
        $("#shoulders").text(measureObject[0].shoulder);
        $("#arms").text(measureObject[0].arms);
        $("#waist").text(measureObject[0].waist);
        $("#hips").text(measureObject[0].hips);
        $("#thigh").text(measureObject[0].thigh);
        $("#calf").text(measureObject[0].calf);
      }
    });
  }

  getCurrentMeasurements();

  $("#submit").click(function() {
    var loginID = JSON.parse(localStorage.getItem("user"))[0].loginID;
    var dateTaken = $("#dateTaken").val();
    dateTaken = dateTaken.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
    var chest = $("#chestInput").val();
    var shoulder = $("#shouldersInput").val();
    var arms = $("#armsInput").val();
    var waist = $("#waistInput").val();
    var hips = $("#hipsInput").val();
    var thigh = $("#thighInput").val();
    var calf = $("#calfInput").val();
    $.ajax({
      type: "POST",
      url:
        "https://letsgofitness.000webhostapp.com/serverside/insertMeasure.php",
      data: {
        dateTaken: dateTaken,
        loginID: loginID,
        chest: chest,
        shoulder: shoulder,
        arms: arms,
        waist: waist,
        hips: hips,
        thigh: thigh,
        calf: calf
      },
      success: function(data) {
        console.log(data);
        if (data == "success") {
          $("#resultTitle").text("Succesful");
          $("#resultBody").text("Successfully added new Data!");
          $("#result").modal("show");
          $("#addMeasurments").modal("hide");
          getCurrentMeasurements();
        } else {
          $("#resultTitle").text("Failed");
          $("#resultBody").text("Failed to add new Data!");
          $("#result").modal("show");
          $("#addMeasurments").modal("hide");
        }
      }
    });
  });
});
