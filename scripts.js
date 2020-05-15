$(document).ready(function() {

	$(".burger-nav").on("click", function() {

		$("header nav ul").toggleClass("open");
	});
});
$( "#exitPopup" ).click(function() {
	var t = document.getElementById("popup");
  	t.className += " dontDisplay";
});
var date = new Date();
document.getElementById("copy").innerHTML = "&copy Continental Cleaners " + date.getFullYear();
