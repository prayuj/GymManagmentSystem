$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "https://letsgofitness.000webhostapp.com/serverside/getPayment.php",
    data: { loginID: JSON.parse(localStorage.getItem("user"))[0].loginID },
    success: function(data) {
      var arrayOfObjects = JSON.parse(data);
      console.log(arrayOfObjects);
      var noOfObjects = arrayOfObjects.length;
      for (var i = 0; i < noOfObjects; i++) {
        $("table").append(
          "<tr><td>" +
            arrayOfObjects[i].payment_id +
            "</td><td>" +
            arrayOfObjects[i].payment_amt +
            "</td><td>" +
            arrayOfObjects[i].payment_type +
            "</td><td>" +
            arrayOfObjects[i].p_id +
            "</td><td>" +
            arrayOfObjects[i].payment_desc +
            "</td><td>" +
            arrayOfObjects[i].dateOfPayment +
            "</td"
        );
      }
    }
  });
});
