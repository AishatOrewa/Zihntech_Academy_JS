const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const button = document.querySelector("button");

input.addEventListener("input", function () {
  const value = input.value.trim();
  h1.textContent = `Welcome ${value} to my Live Typing Counter page.`;
  p.textContent = `You've written ${value.length} characters😊`;
  if (value === "") {
    p.textContent = "You've not typed anything🤦‍♀️";
  }
});
button.addEventListener("click", function (e) {
  e.preventDefault();
  input.value = "";
});
