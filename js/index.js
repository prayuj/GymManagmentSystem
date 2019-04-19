$(document).ready(function() {
  if (localStorage.username) {
    location.href = "main.html";
  }
  // else {
  //   $(document).on("click", "#login", function() {
  //     var username = $("#username").val();
  //     var password = $("#password").val();

  //     $.ajax({
  //       type: "POST",
  //       url: "https://letsgofitness.000webhostapp.com/serverside/login.php",
  //       data: { username: username, password: password },
  //       success: function(data) {
  //         if (data == "success") {
  //           localStorage.username = username;
  //           location.href = "main.html";
  //         } else {
  //           alert("Login Failed!!!");
  //         }
  //       }
  //     });
  //   });
  // }
});
