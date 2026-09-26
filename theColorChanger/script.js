const h1 = document.querySelector("h1");
const button = document.querySelector("#colorBtn");
button.addEventListener("click", function (event) {
  event.preventDefault();
  h1.textContent = "You changed me!!";
});
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  h1.textContent = "Click the Button below";
});
