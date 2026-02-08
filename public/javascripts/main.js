export function checkUsername(username, UsernameError) {
  const specialCharsRegex = /[^\w\s]/;
  if (username.length < 6 || specialCharsRegex.test(username)) {
    error(UsernameError, `Invalid Username`);
    return false;
  }
  return true;
}

export function checkEmail(email, EmailError) {
  if (
    !email.endsWith("@gmail.com") ||
    email.startsWith(".") ||
    email.includes(" ") ||
    email.split("@")[0].length < 6
  ) {
    error(EmailError, `Invalid Email`);
    return false;
  }
  return true;
}

export function checkPassword(password, PasswordError) {
  if (password.length < 6) {
    error(PasswordError, `Passsword length must be greater than 6`);
    return false;
  }
  return true;
}

function error(err, message) {
  err.innerHTML = message;
  setTimeout(() => {
    err.innerHTML = "";
  }, 3000);
}
