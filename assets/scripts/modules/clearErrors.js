export const clearErrorsLogin = (errorMessages) => {
  errorMessages.emailError.textContent = "";
  errorMessages.emailError.classList.remove("error");

  errorMessages.passwordError.textContent = "";
  errorMessages.passwordError.classList.remove("error");
};

export const clearErrorsRegister = (errorMessages) => {
  errorMessages.nameError.textContent = "";
  errorMessages.nameError.classList.remove("error");

  errorMessages.emailError.textContent = "";
  errorMessages.emailError.classList.remove("error");

  errorMessages.passwordError.textContent = "";
  errorMessages.passwordError.classList.remove("error");
};
