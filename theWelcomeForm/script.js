const form = document.querySelector("#welcomeForm");
const input = document.querySelector("input");
const message = document.querySelector("p");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = input.value.trim();
  if (name === "") {
    message.textContent = "Please type your name";
    message.style.color = "red";
  } else {
    message.textContent = `Welcome, ${name}`;
    message.style.color = "green";
    message.style.fontWeight = "bolder";
    input.value = "";
  }
});
