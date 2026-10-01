const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msgBox = document.querySelector("#messageBox");
const msg = document.querySelector("#formMsg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.textContent = "JS is working";
});
