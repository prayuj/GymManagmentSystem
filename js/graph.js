$(document).ready(function() {
  $(".btn-info").click(function() {
    console.log(this.id.replace("Progress", ""));
    var loginID = JSON.parse(localStorage.getItem("user"))[0].loginID;
    var partOfBody = this.id.replace("Progress", "");
    if (partOfBody == "all") {
      console.log("Working");
      $.ajax({
        type: "POST",
        async: false,
        url:
          "https://letsgofitness.000webhostapp.com/serverside/getAllBodyPartValues.php",
        data: {
          loginID: loginID,
          partOfBody: partOfBody
        },
        success: function(data) {
          var valueObjbect = JSON.parse(data);
          console.log(valueObjbect);
          var chestObjectPoints = [];
          var shoulderObjectPoints = [];
          var thighObjectPoints = [];
          var armsObjectPoints = [];
          var calfObjectPoints = [];
          var hipsObjectPoints = [];
          var waistObjectPoints = [];
          for (let i = 0; i < valueObjbect.length; i++) {
            console.log(valueObjbect[i]);
            var chestTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].chest)
            };
            chestObjectPoints.push(chestTemp);

            var shoulderTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].shoulder)
            };
            shoulderObjectPoints.push(shoulderTemp);

            var thighTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].thigh)
            };
            thighObjectPoints.push(thighTemp);

            var armsTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].arms)
            };
            armsObjectPoints.push(armsTemp);

            var calfTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].calf)
            };
            calfObjectPoints.push(calfTemp);

            var hipsTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].hips)
            };
            hipsObjectPoints.push(hipsTemp);

            var waistTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].waist)
            };
            waistObjectPoints.push(waistTemp);
          }

          console.log(chestObjectPoints);

          localStorage.removeItem("graphValues");
          localStorage.setItem(
            "graphValuesChest",
            JSON.stringify(chestObjectPoints)
          );
          localStorage.setItem(
            "graphValuesShoulder",
            JSON.stringify(shoulderObjectPoints)
          );
          localStorage.setItem(
            "graphValuesThigh",
            JSON.stringify(thighObjectPoints)
          );
          localStorage.setItem(
            "graphValuesArms",
            JSON.stringify(armsObjectPoints)
          );
          localStorage.setItem(
            "graphValuesCalf",
            JSON.stringify(calfObjectPoints)
          );
          localStorage.setItem(
            "graphValuesHips",
            JSON.stringify(hipsObjectPoints)
          );
          localStorage.setItem(
            "graphValuesWaist",
            JSON.stringify(waistObjectPoints)
          );

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
                name: "Chest",
                showInLegend: true,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(localStorage.getItem("graphValuesChest"))
              },
              {
                type: "line",
                name: "Shoulders",
                showInLegend: true,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(
                  localStorage.getItem("graphValuesShoulder")
                )
              },
              {
                type: "line",
                name: "Thigh",
                showInLegend: true,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(localStorage.getItem("graphValuesThigh"))
              },
              {
                type: "line",
                name: "Arms",
                showInLegend: true,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(localStorage.getItem("graphValuesArms"))
              },
              {
                type: "line",
                name: "Calf",
                showInLegend: true,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(localStorage.getItem("graphValuesCalf"))
              },
              {
                type: "line",
                name: "Hips",
                showInLegend: true,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(localStorage.getItem("graphValuesHips"))
              },
              {
                type: "line",
                name: "Waist",
                showInLegend: true,
                show: false,
                connectNullData: true,
                xValueType: "dateTime",
                xValueFormatString: "DD MMM",
                yValueFormatString: '#,##0.##" inches"',
                dataPoints: JSON.parse(localStorage.getItem("graphValuesWaist"))
              }
            ],
            legend: {
              cursor: "pointer",
              itemclick: function(e) {
                //console.log("legend click: " + e.dataPointIndex);
                //console.log(e);
                if (
                  typeof e.dataSeries.visible === "undefined" ||
                  e.dataSeries.visible
                ) {
                  e.dataSeries.visible = false;
                } else {
                  e.dataSeries.visible = true;
                }

                e.chart.render();
              }
            }
          });
          chart.render();
          $("#graph").modal("show");
        }
      });
    } else {
      $.ajax({
        type: "POST",
        async: false,
        url:
          "https://letsgofitness.000webhostapp.com/serverside/getBodyPartValues.php",
        data: {
          loginID: loginID,
          partOfBody: partOfBody
        },
        success: function(data) {
          var valueObjbect = JSON.parse(data);
          console.log(valueObjbect);
          var arrayObjectPoints = [];
          for (let i = 0; i < valueObjbect.length; i++) {
            var objectTemp = {
              x: Date.parse(valueObjbect[i].dateTaken),
              y: parseFloat(valueObjbect[i].partOfBody)
            };
            arrayObjectPoints.push(objectTemp);
          }
          localStorage.removeItem("graphValues");
          localStorage.setItem(
            "graphValues",
            JSON.stringify(arrayObjectPoints)
          );
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
            name: partOfBody + "Measurments",
            showInLegend: true,
            connectNullData: true,
            xValueType: "dateTime",
            xValueFormatString: "DD MMM",
            yValueFormatString: '#,##0.##" inches"',
            dataPoints: JSON.parse(localStorage.getItem("graphValues"))
          }
        ]
      });
      chart.render();

      $("#graph").modal("show");
    }
  });
});
