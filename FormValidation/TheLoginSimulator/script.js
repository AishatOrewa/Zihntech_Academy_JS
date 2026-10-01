const storedUser = { username: "ada", password: "zihntech123" };
const form = document.querySelector("#loginForm");
const userNameInput = document.querySelector("#loginUsername");
const passwordInput = document.querySelector("#loginPassword");
const msgInput = document.querySelector("#loginMsg");
let attempts = 0;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  msgInput.style.fontWeight = "bolder";
  const userName = userNameInput.value.trim();
  const password = passwordInput.value;
  if (attempts >= 3) {
    msgInput.textContent = "Too many attempts. Try again later";
    msgInput.style.color = "red";
    return;
  } else if (userName !== storedUser.username) {
    msgInput.textContent = "Username not found";
    msgInput.style.color = "red";
    attempts += 1;
  } else if (password !== storedUser.password) {
    msgInput.textContent = "Incorrect Password";
    msgInput.style.color = "red";
    attempts += 1;
  } else {
    msgInput.textContent = "Login successful! Welcome back.";
    msgInput.style.color = "green";
    attempts = 0;
    form.reset();
  }
});
