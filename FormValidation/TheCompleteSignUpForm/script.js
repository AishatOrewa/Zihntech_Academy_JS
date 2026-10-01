const fNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const terms = document.querySelector("#terms");
const form = document.querySelector("#signupForm");
const msg = document.querySelector("#signupMsg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.style.fontWeight = "bolder";
  const name = fNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const age = Number(ageInput.value.trim());
  if (name === "") {
    msg.textContent = "Full name is required!";
    msg.style.color = "red";
  } else if (!email.includes("@") && !email.includes(".")) {
    msg.textContent = "Enter a valid email!";
    msg.style.color = "red";
  } else if (age === "" || isNaN(age) || age < 16) {
    msg.textContent = "You must be at least 16 to sign up";
    msg.style.color = "red";
  } else if (password.length < 8) {
    msg.textContent = "Password must be at least 8 characters!";
    msg.style.color = "red";
  } else if (password !== confirmPassword) {
    msg.textContent = "Passwords do not match!";
    msg.style.color = "red";
  } else if (terms.checked === false) {
    msg.textContent = "You must accept the terms to continue!";
    msg.style.color = "red";
  } else {
    msg.textContent = `Welcome ${name}, your acccount has been created Successfully!!`;
    msg.style.color = "green";
    form.reset();
  }
});
confirmPasswordInput.addEventListener("input", function () {
  if (passwordInput.value !== confirmPasswordInput.value) {
    msg.textContent = "Passwords do not match!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Passwords match!";
    msg.style.color = "green";
  }
});
