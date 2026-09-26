const darkMode = document.querySelector("#darkMode");
const body = document.querySelector("body");
const div = document.querySelectorAll(".div");
const h1 = document.querySelector("h1");
const lightMode = document.querySelector("#lightMode");
darkMode.addEventListener("click", function () {
  // h1.textContent = "JS is working!";
  body.classList.add("dark");
  div.forEach(function (element) {
    element.classList.add("darkmode");
  });
});
lightMode.addEventListener("click", function () {
  body.classList.remove("dark");
  div.forEach(function (element) {
    element.classList.remove("darkmode");
  });
});
