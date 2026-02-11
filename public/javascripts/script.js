import { checkUsername, checkEmail, checkPassword, error } from "./main.js";

let Form = document.getElementById("form");
let Username = document.getElementById("username");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let UsernameError = document.getElementById("username-error");
let EmailError = document.getElementById("email-error");
let PasswordError = document.getElementById("password-error");

Form.addEventListener("submit", async e => {
  e.preventDefault();
  const isValid =
    await checkEmail(Email.value, EmailError) &&
    checkPassword(Password.value, PasswordError) &&
    await checkUsername(Username.value, UsernameError);

  if (isValid) {
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
