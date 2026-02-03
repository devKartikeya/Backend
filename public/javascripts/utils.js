export const error = (field, fieldError, message) => {
  fieldError.innerHTML = message;
  setTimeout(() => {
    field.value = "";
    fieldError.innerHTML = "";
  }, 3000);
  return;
};

export const success = (fieldError, message) => {
  const img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5Nzi8fcQC2NYa6-SfghSqcEgC3GJ1Mw9WA&s";
  img.width = 25;
  img.height = 25;
  fieldError.innerHTML = message;
  fieldError.style.color = "green";
  fieldError.appendChild(img);
  return true;
};

export const togglePwd = password =>
  (password.type = password.type === "password" ? "text" : "password");
