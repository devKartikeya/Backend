import { error } from "./main.js";

let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let EmailError = document.getElementById("email-error");
let PasswordError = document.getElementById("password-error");

form.addEventListener("submit", async e => {
  e.preventDefault();

  if (checkEmail(email.value) && checkPassword(password.value)) {
    const res = await fetch("/log-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });
    const data = await res.json();
    console.log(data);

    if (!data.success) {
      if (data.data.field == "email") {
        error(EmailError, `User does not exists`);
        return;
      }
      if (data.data.field == "password") {
        error(PasswordError, `Password is incorrect`);
        return;
      }
      }
      window.location.href = "/home";
  }
});

function checkPassword(password) {
  if (password.length < 6) {
    error(PasswordError, `Invalid password`);
    return false;
  }
  return true;
}

function checkEmail(email) {
  if (
    !email.endsWith("@gmail.com") ||
    email.startsWith(".") ||
    email.includes(" ")
  ) {
    error(EmailError, `Invalid email`);
    return false;
  }
  return true;
}