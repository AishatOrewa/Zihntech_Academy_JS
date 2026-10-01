const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgBoxInput = document.querySelector("#messageBox");
const msg = document.querySelector("#formMsg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // msg.textContent = "JS is working";
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const msgBox = msgBoxInput.value.trim();
  if (name === "") {
    msg.textContent = "Please Enter Your Name!";
    msg.style.color = "red";
  } else if (email === "") {
    msg.textContent = "Please Enter Your Email!";
    msg.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "Please check that your email is correct!";
    msg.style.color = "red";
  } else if (msgBox === "") {
    msg.textContent = "Please write a message";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent, thank you!";
    msg.style.color = "green";
    msg.style.fontWeight = "bolder";
    nameInput.value = "";
    emailInput.value = "";
    msgBoxInput.value = "";
  }
});
