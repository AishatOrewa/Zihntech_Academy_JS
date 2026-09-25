const p = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", function (event) {
  event.preventDefault();
  p.textContent = `${input.value.trim()} your registration status has been confirmed!`;
  p.style.color = "green";
  p.style.fontWeight = "bold";
  input.value = "";
});
