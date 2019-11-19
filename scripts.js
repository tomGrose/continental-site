
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var date = new Date();
document.getElementById("copy").innerHTML = "&copy Continental Cleaners " + date.getFullYear();

