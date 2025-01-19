const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".enter-button");

email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

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

  if (isEmailValid) {
    email.classList.remove("error");
  } 
  else if (email.value === "") {
    email.classList.remove("error");
  }
  else {
    email.classList.add("error");
  }

  if (password.value.length >= 6) {
    password.classList.remove("error");
  } 
  else if (password.value === "") {
    password.classList.remove("error");
  }
  else {
    password.classList.add("error");
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