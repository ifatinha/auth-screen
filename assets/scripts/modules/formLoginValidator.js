import { validatePassword, validateEmail } from "./validator.js";
import { clearErrorsLogin } from "./clearErrors.js";
import { displayError } from "./displayErro.js";

export const formLoginValidator = () => {
  const userInput = {
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
  };

  const errorMessages = {
    emailError: document.querySelector("#emailError"),
    passwordError: document.querySelector("#passwordError"),
  };

  const form = document.querySelector("#formLogin");

  if (!form) return;

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearErrorsLogin(errorMessages);
    let formIsValid = true;

    try {
      validateEmail(userInput.email.value);
    } catch (err) {
      formIsValid = false;
      displayError(
        errorMessages.emailError,
        "Email inválido. Verifique e tente novamente."
      );
    }

    try {
      validatePassword(userInput.password.value);
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
