const h1 = document.querySelector("h1");
const button = document.querySelector("#colorBtn");
button.addEventListener("click", function (event) {
  h1.textContent = "You changed me!!";
  h1.style.color = "red";
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  h1.textContent = "Click the Button below";
  h1.style.color = "blueviolet";
});
