$(document).ready(function() {
  var profileObject = JSON.parse(localStorage.user);
  $("#name").text(profileObject[0].name);
  $("#username").text(profileObject[0].username);
  $("#loginID").text(profileObject[0].loginID);
  $("#dob").text(profileObject[0].dob);
  $("#address").text(profileObject[0].address);
  $("#emailID").text(profileObject[0].emailID);
  $("#gender").text(profileObject[0].gender);
  $("#loginRole").text(profileObject[0].login_role);
});
