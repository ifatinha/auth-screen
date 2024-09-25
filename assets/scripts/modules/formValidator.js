import { validatePassword, validateEmail } from "./validator.js";
import { clearErrors } from "./clearErrors.js";
import { displayError } from "./displayErro.js";

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
    clearErrors(errorMessages);
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
