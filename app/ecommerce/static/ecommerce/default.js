/* side menu JS */

function openNav() {
  $("#js_side_nav").width("250px");
}

function closeNav() {
  $("#js_side_nav").width(0);
}

$("#nav_opener").on("click", openNav);
$("#nav_closer").on("click", closeNav);

// Get the modal When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById(""); // target the container element
$("").on("click", function (event) {
  if (event.target == modal) {
    closeNav();
  }
});

