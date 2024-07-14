const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Email cannot Be Blank");
  } else if (!isEmail(emailVal)) {
    setError(email, "Not a valid Email");
  } else {
    setSuccess(email);
  }

  if (passwordVal === "") {
    setError(password, "password Cannot Be Blank");
  } else {
    setSuccess(password);
  }
  if (cpasswordVal === "") {
    setError(password, "password Cannot Be Blank");
  } else if (passwordVal !== cpasswordVal) {
    setError(cpassword, "Password does not match");
  } else {
    setSuccess(cpassword);
  }

  function setError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector(".error");
    formControl.className = "form-control error";
    errorElement.innerText = message;
    formControl.classList.add("error");
    formControl.classList.remove("success");
  }

  function setSuccess(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector(".error");
    formControl.className = "form-control error";
    errorElement.innerText = "";
    formControl.classList.add("error");
    formControl.classList.remove("success");
  }
  const isEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
}
