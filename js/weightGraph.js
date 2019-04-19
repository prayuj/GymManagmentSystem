$(document).ready(function() {
  $("#see_progress").click(function() {
    console.log(this.id.replace("Progress", ""));
    var loginID = JSON.parse(localStorage.getItem("user"))[0].loginID;
    var partOfBody = this.id.replace("Progress", "");
    $.ajax({
      type: "POST",
      async: false,
      url:
        "https://letsgofitness.000webhostapp.com/serverside/getWeightValues.php",
      data: {
        loginID: loginID
      },
      success: function(data) {
        var valueObjbect = JSON.parse(data);
        console.log(valueObjbect);
        var arrayObjectPoints = [];
        for (let i = 0; i < valueObjbect.length; i++) {
          var objectTemp = {
            x: Date.parse(valueObjbect[i].dateTaken),
            y: parseFloat(valueObjbect[i].weight)
          };
          arrayObjectPoints.push(objectTemp);
        }
        localStorage.removeItem("graphValues");
        localStorage.setItem("graphValues", JSON.stringify(arrayObjectPoints));
        console.log(JSON.parse(localStorage.getItem("graphValues")));
      }
    });

    console.log(JSON.parse(localStorage.getItem("graphValues")));

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Simple Line Chart"
      },
      axisX: {
        valueFormatString: "DD MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        },
        title: "Date"
      },
      axisY: {
        includeZero: false,
        title: "Measurments"
      },
      data: [
        {
          type: "line",
          name: "Weight Progress",
          showInLegend: true,
          connectNullData: true,
          xValueType: "dateTime",
          xValueFormatString: "DD MMM",
          yValueFormatString: '#,##0.##" Kgs"',
          dataPoints: JSON.parse(localStorage.getItem("graphValues"))
        }
      ]
    });
    chart.render();
    $("#graph").modal("show");
  });
});
