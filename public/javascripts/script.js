import { checkUsername, checkEmail, checkPassword } from "./main.js";

let Form = document.getElementById("form");
let Username = document.getElementById("username");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let UsernameError = document.getElementById("username-error");
let EmailError = document.getElementById("email-error");
let PasswordError = document.getElementById("password-error");

Form.addEventListener("submit", e => {
  e.preventDefault();
  if (
    // checkEmail(Email.value, EmailError) &&
    // checkPassword(Password.value, PasswordError) &&
    // checkUsername(Username.value, UsernameError)
    2 + 2 == 4
  ) {
    form.submit();
  }
});

Username.addEventListener("blur", () => {
  if (Username.value !== "") checkUsername(Username.value, UsernameError);
});

Email.addEventListener("blur", () => {
  if (Email.value !== "") checkEmail(Email.value, EmailError);
});

Password.addEventListener("blur", () => {
  if (Password.value !== "") checkPassword(Password.value, PasswordError);
});
