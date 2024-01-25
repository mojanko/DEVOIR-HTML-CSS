function dark() {
    var element = document.body;
    element.classList.toggle("dark_mode");
  }

function linksfunc() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}