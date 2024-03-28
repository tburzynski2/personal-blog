// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const mainContainer = document.querySelector("main");

// Set default mode to dark
let mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("change", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    mainContainer.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    mainContainer.setAttribute("class", "dark");
  }
});
