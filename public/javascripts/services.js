import { error, success } from "./utils.js";

export const verify = async (type, emailId, emailIdError, user, userError) => {
  const email = emailId.value;
  const username = user.value;
  const checkemailId = await fetch("http://localhost:3000/verify-User", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email })
  });
  const data = await checkemailId.json();

  if (type !== "username" && data.emailExists) {
    error(emailId, emailIdError, "Email Already Exists!");
    return false;
  }

  if (type !== "email" && data.usernameExists) {
    error(user, userError, "Username already Exists!");
    return false;
  }

  if (type === "email") {
    success(emailIdError, "Verified");
  }

  if (type === "username") {
    success(userError, "Verified");
  }
  return true;
};

export const verifyPwd = (password, passwordError) => {
  if (password.value.length < 6) {
    error(password, passwordError, "Password length cannot be less than 6");
    return false;
  }
  return true;
};

export const verifyEmail = emailId => {
  const email = emailId.value;
  const localPart = email.split("@")[0];
  if (
    !email.endsWith("@gmail.com") ||
    email.startsWith(".") ||
    email.includes(" ") ||
    (localPart.length < 6 || localPart.length > 30)
  ) {
    return false;
  }
  return true;
};
