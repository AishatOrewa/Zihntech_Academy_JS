const passwordInput = document.querySelector("input");
const strength = document.querySelector("#strength");
passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  strength.style.fontWeight = "bolder";
  let hasNumber = false;
  let hasUpper = false;
  for (i = 0; i <= password.length; i++) {
    if ("0123456789".includes(password[i])) {
      hasNumber = true;
    }
  }
  for (i = 0; i <= 10; i++) {
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(password[i])) {
      hasUpper = true;
    }
  }
  if (password.length < 6) {
    strength.textContent = "Weak";
    strength.style.color = "red";
  } else if (password.length < 10) {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  } else if (password.length >= 10 && !hasNumber) {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  } else if (hasUpper && password.length >= 10 && hasNumber) {
    strength.textContent = "Strong";
    strength.style.color = "green";
  } else if (hasNumber && password.length >= 10) {
    strength.textContent = "Strong";
    strength.style.color = "green";
  }
});
