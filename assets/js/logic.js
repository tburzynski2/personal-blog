// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const body = document.querySelector("body");

// Set default mode to dark
let mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("change", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    body.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    body.setAttribute("class", "dark");
  }
});
