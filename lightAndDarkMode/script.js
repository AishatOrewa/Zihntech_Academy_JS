const mode = document.querySelector("#modeBtn");
const body = document.querySelector("body");
mode.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    mode.innerHTML = "Go light";
  } else {
    mode.innerHTML = "Go dark";
  }
});
