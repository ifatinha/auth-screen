export const clearErros = (errorMessages) => {
  errorMessages.emailError.textContent = "";
  errorMessages.emailError.classList.remove("error");

  errorMessages.passwordError.textContent = "";
  errorMessages.passwordError.classList.remove("error");
};
