const mode = document.querySelector("#modeBtn");
const body = document.querySelector("body");
mode.addEventListener("click", function () {
  body.classList.toggle("dark");
});
