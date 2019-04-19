$(document).ready(function() {
  if (localStorage.username) {
    $("#loginToggle").html("<li><a href='#' id = 'logout'>Logout</a></li>");
  }
  $("#logout").click(function() {
    localStorage.removeItem("username");
    location.href = "index.html";
  });
});
