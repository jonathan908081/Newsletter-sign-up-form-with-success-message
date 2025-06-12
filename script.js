const form = document.querySelector("form"),
  userEmail = document.getElementById("userEmail"),
  confrimationEmail = document.getElementById("confrimationEmail"),
  dismissBtn = document.getElementById("dismissBtn"),
  cardContainer = document.querySelector(".card__container"),
  successConatiner = document.querySelector(".success__container"),
  errorSpan = document.querySelector(".errorSpan");

form.addEventListener("submit", validateEmail);
dismissBtn.addEventListener("click", closeScreen);

function validateEmail(e) {
  e.preventDefault();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userEmailValue = userEmail.value.trim();

  if (userEmailValue === "") {
    showError("Email is required");
    return false;
  }
  if (!emailRegex.test(userEmailValue)) {
    showError("Valid email required");
    return false;
  }
  showSuccess(userEmail);
  return true;
}

function showError(message) {
  errorSpan.textContent = message;
  errorSpan.classList.add("active");
  userEmail.classList.add("error");

  userEmail.focus();
}

function showSuccess(userEmailValue) {
  cardContainer.style.display = "none";
  successConatiner.style.display = "grid";

  errorSpan.textContent = "";
  userEmail.classList.remove("error");

  confrimationEmail.textContent = ` ${userEmail.value} `;
}

function closeScreen() {
  successConatiner.style.display = "none";
  cardContainer.style.display = "grid";
  userEmail.value = "";
  userEmail.classList.remove("error");
  errorSpan.textContent = "";
}
