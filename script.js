var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

// Set color for each input //

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// Random color generator

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var x2 = Math.floor(Math.random() * 256);
  var y2 = Math.floor(Math.random() * 256);
  var z2 = Math.floor(Math.random() * 256);
  var bgColor =
    "linear-gradient(to right,rgb(" +
    x +
    ", " +
    y +
    ", " +
    z +
    "), rgb(" +
    x2 +
    ", " +
    y2 +
    ", " +
    z2 +
    "))";

  document.body.style.background = bgColor;
  css.textContent = body.style.background + ";";
}

//  //
window.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", random_bg_color);
