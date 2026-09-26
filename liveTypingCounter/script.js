const input = document.querySelector("input");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const button = document.querySelector("button");

input.addEventListener("input", function () {
  const value = input.value.trim();
  h1.textContent = `Hello, ${value}!`;
  p.textContent = `${value.length} characters`;
  p.style.color = "black";
  if (value === "") {
    p.textContent = "0 characters.";
    h1.textContent = "Hello, Stranger!";
  }
  if (value.length >= 20) {
    p.style.color = "red";
  } else {
    p.style.color = "black";
  }
});
