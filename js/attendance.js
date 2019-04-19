$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "https://letsgofitness.000webhostapp.com/serverside/getAttendance.php",
    data: { loginID: JSON.parse(localStorage.getItem("user"))[0].loginID },
    success: function(data) {
      var arrayOfObjects = JSON.parse(data);
      var noOfObjects = arrayOfObjects.length;
      for (var i = 0; i < noOfObjects; i++) {
        var status;
        if (arrayOfObjects[i].status == 1) status = "Present";
        else status = "Absent";
        $("table").append(
          "<tr><td>" +
            arrayOfObjects[i].date +
            "</td><td>" +
            arrayOfObjects[i].in_time +
            "</td><td>" +
            arrayOfObjects[i].out_time +
            "</td><td>" +
            status +
            "</td></tr"
        );
      }
    }
  });
});
