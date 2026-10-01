const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgBoxInput = document.querySelector("#messageBox");
const msg = document.querySelector("#formMsg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // msg.textContent = "JS is working";
  const name = nameInput.trim();
  const email = emailInput.trim();
  const msgBox = msgBoxInput.trim();
});
