const password = document.getElementById("password");
const email = document.getElementById("email");
const button = document.querySelector(".enter-button");

password.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);

function emailValidation(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validateForm() {
  const isEmailValid = emailValidation(email.value);

  if (password.value.length >= 6 && isEmailValid) {
    button.classList.remove("disabled");
  } else {
    button.classList.add("disabled");
  }
}

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (button.classList.contains("disabled")) {
    return;
  }
  alert("Login bem sucessido!");
  window.location.reload();
});