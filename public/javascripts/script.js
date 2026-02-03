import { verify, verifyEmail, verifyPwd } from "./services.js";
import { togglePwd, error } from "./utils.js";

let user = document.getElementById("username");
let password = document.getElementById("password");
let emailId = document.getElementById("email");
let initial = document.getElementById("initial");
let userError = document.querySelector(".username-error");
let emailIdError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");
let togglepassword = document.querySelector(".toggle-password");
let form = document.querySelector(".signup-form");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const isUserOk = await verify("both", emailId, emailIdError, user, userError);
  const isPwdOk = verifyPwd(password, passwordError);
  if (isUserOk && isPwdOk && user.value !== "") {
    form.submit();
  }
});

user.addEventListener("input", e => {
  if (initial.innerHTML == 20) e.preventDefault();
  initial.innerHTML = user.value.length;
});

user.addEventListener("blur", async e => {
  if (user.value == "") return;
  await verify("username", emailId, emailIdError, user, userError);
});

emailId.addEventListener("blur", async e => {
  if (emailId.value == "") return;
  const isEmailOk = verifyEmail(emailId);
  if (isEmailOk) await verify("email", emailId, emailIdError, user, userError);
  else error(emailId, emailIdError, "Please enter a valid Email-Id");
});

password.addEventListener("blur", () => {
  if (password.value == "") return;
  else verifyPwd(password, passwordError);
});

togglepassword.addEventListener("click", () => {
  togglePwd(password);
});