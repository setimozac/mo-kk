/* side menu JS */

function openNav() {
  $("#js_side_nav").width("250px");
}

function closeNav() {
  $("#js_side_nav").width(0);
}

$("#nav_opener").on("click", openNav);
$("#nav_closer").on("click", closeNav);

/* Footer JS */

$(document).ready(function showYear() {
  var d = new Date();
  var thisYear = d.getFullYear();
  $("#year_brand").text("© " + thisYear + ", SETIMO.");
});
