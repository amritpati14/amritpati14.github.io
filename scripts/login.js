var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
alert ("Login successfully");
window.location = "invoice.html"; // Redirecting to other page.
return false;
}
else if (username == "admin1" && password == "admin1") {
  alert ("Login successfully");
  window.location = "invoice2.html"; // Redirecting to other page.
  return false;
}
else if (username == "admin2" && password == "admin2") {
  alert ("Login successfully");
  window.location = "invoice.html"; // Redirecting to other page.
  return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
