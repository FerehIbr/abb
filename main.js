function Search() {
  var ss = document.getElementById("sectionsrc");
  if (ss.style.display === "block") {
    ss.style.display = "none";
  } else {
    ss.style.display = "block";
  }
}
function Lang() {
  var icon = document.getElementById("angle");
  icon.classList.toggle("angle");
}
