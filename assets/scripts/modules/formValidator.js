import { validatePassword, validateEmail } from "./validator.js";

const clearErros = (errorMessages) => {
  errorMessages.emailError.textContent = "";
  errorMessages.emailError.classList.remove("error");

  errorMessages.passwordError.textContent = "";
  errorMessages.passwordError.classList.remove("error");
};

const displayError = (element, message) => {
  element.textContent = message;
  element.classList.add("error");
};

export const validateForm = () => {
  const userInputLogin = {
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
  };

  const errorMessages = {
    emailError: document.querySelector("#emailError"),
    passwordError: document.querySelector("#passwordError"),
  };

  const form = document.querySelector("#formLogin");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearErros(errorMessages);
    let formIsValid = true;
    
    try {
      validateEmail(userInputLogin.email.value);
    } catch (err) {
      formIsValid = false;
      displayError(
        errorMessages.emailError,
        "Email inválido. Verifique e tente novamente."
      );
    }

    try {
      validatePassword(userInputLogin.password.value);
    } catch (err) {
      formIsValid = false;
      displayError(
        errorMessages.passwordError,
        "Senha inválida. A senha deve ter no mínimo 8 caracteres."
      );
    }

    if (formIsValid) {
      alert("Bem Vindo!");
    }
  });
};
