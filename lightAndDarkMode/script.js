const lightMode = document.querySelector("#lightMode");
const body = document.querySelector("body");
const div = document.querySelectorAll(".div");
const h1 = document.querySelector("h1");
lightMode.addEventListener("click", function () {
  // h1.textContent = "JS is working!";
  body.classList.add("dark");
  div.forEach((element) => {
    element.classList.add("darkmode"); // Works perfectly
  });
});
