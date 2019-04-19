$(document).ready(function() {
  function loadLatest() {
    $.ajax({
      type: "POST",
      url: "https://letsgofitness.000webhostapp.com/serverside/getdata.php",
      data: { username: localStorage.username },
      success: function(data) {
        console.log(data);
        localStorage.setItem("user", data);
        var retreivedObject = JSON.parse(localStorage.getItem("user"));
        $("#name").html("<b>" + retreivedObject[0].name + "</b>");
        if (retreivedObject[0].login_role == "Member") {
          console.log("Member");
          $.ajax({
            type: "POST",
            url:
              "https://letsgofitness.000webhostapp.com/serverside/getMemberInfo.php",
            data: { loginID: retreivedObject[0].loginID },
            success: function(data) {
              console.log(data);
              localStorage.setItem("member", data);
              var memberInfoObject = JSON.parse(localStorage.getItem("member"));
              $("#current_wt").text(memberInfoObject[0].current_wt + " Kgs");
              $("#start_wt").text(memberInfoObject[0].start_wt + "Kgs");
              $("#recent_date").text(formatDate(memberInfoObject[1].date));
              $("#current_plan").text(memberInfoObject[2].P_NAME);
              console.log(memberInfoObject[2]);
            }
          });
        } else {
          console.log("Trainer");
        }
      }
    });
  }

  function formatDate(d) {
    var date = new Date(d);

    if (isNaN(date.getTime())) {
      return d;
    } else {
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";

      day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }

      return day + " " + month[date.getMonth()] + " " + date.getFullYear();
    }
  }

  loadLatest();
  $("#submit").click(function() {
    var loginID = JSON.parse(localStorage.getItem("user"))[0].loginID;
    var dateTaken = $("#dateTaken").val();
    dateTaken = dateTaken.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
    var weight = $("#weight").val();
    console.log(loginID, dateTaken, weight);
    $.ajax({
      type: "POST",
      url:
        "https://letsgofitness.000webhostapp.com/serverside/insertWeight.php",
      data: {
        dateTaken: dateTaken,
        loginID: loginID,
        weight: weight
      },
      success: function(data) {
        console.log(data);
        if (data == "success") {
          $("#resultTitle").text("Succesful");
          $("#resultBody").text("Successfully added new Data!");
          $("#result").modal("show");
          $("#addWeight").modal("hide");
          loadLatest();
        } else {
          $("#resultTitle").text("Failed");
          $("#resultBody").text("Failed to add new Data!");
          $("#result").modal("show");
          $("#addWeight").modal("hide");
        }
      }
    });
  });
});
