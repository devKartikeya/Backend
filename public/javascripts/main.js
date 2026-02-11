export async function checkUsername(username, UsernameError) {
  const specialCharsRegex = /[^\w\s]/;
  if (username.length < 6 || specialCharsRegex.test(username)) {
    error(UsernameError, `Invalid Username`);
    return false;
  }
  const res = await checkUser(username, UsernameError);
  if (!res) {
    error(UsernameError, `Username already exists !`);
    return false;
  }
  return true;
}

export async function checkEmail(email, EmailError) {
  if (email == "") {
    return false;
  }
  if (
    !email.endsWith("@gmail.com") ||
    email.startsWith(".") ||
    email.includes(" ") ||
    email.split("@")[0].length < 6
  ) {
    error(EmailError, `Invalid Email`);
    return false;
  }
  const res = await checkUser(email, EmailError);
  if (!res) {
    error(EmailError, `Email already exists !`);
    return false;
  }
  return true;
}

export async function checkUser(input, inputError) {
  const res = await fetch("/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ input })
  });
  const data = await res.json();
  const result = data.data;
  if (!data.success) {
    if (result.field == "email") {
      return false;
    }
    if (result.field == "username") {
      return false;
    }
  }
  return true;
}

export function checkPassword(password, PasswordError) {
  if (password.length < 6) {
    error(PasswordError, `Password length must be greater than 6`);
    return false;
  }
  return true;
}

export function error(err, message) {
  err.innerHTML = message;
  setTimeout(() => {
    err.innerHTML = "";
  }, 3000);
}
