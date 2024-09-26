import { displayError } from "./displayErro.js";
import { clearErrorsRegister } from "./clearErrors.js";
import { validateEmail, validatePassword } from "./validator.js";

const userInput = () => {
  const inputs = {
    fullname: document.querySelector("#fullname"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
  };

  if (!inputs.fullname || !inputs.email || !inputs.password) return;

  return inputs;
};

const errorMessages = () => {
  const messages = {
    nameError: document.querySelector("#nameError"),
    emailError: document.querySelector("#emailError"),
    passwordError: document.querySelector("#passwordError"),
  };

  if (!messages.nameError || !messages.emailError || !messages.passwordError) {
    return;
  }

  return messages;
};

export const formRegisterValidor = () => {
  const inputs = userInput();
  const errors = errorMessages();
  const form = document.querySelector("#register");

  if (!form) return;

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    clearErrorsRegister(errors);
    let formIsValid = true;

    try {
      validateEmail(inputs.email.value);
    } catch (err) {
      formIsValid = false;
      displayError(
        errors.emailError,
        "Email inválido. Verifique e tente novamente."
      );
    }

    try {
      validatePassword(inputs.password.value);
    } catch (err) {
      formIsValid = false;
      displayError(
        errors.passwordError,
        "Senha inválida. A senha deve ter no mínimo 8 caracteres."
      );
    }

    if (formIsValid) {
      alert("Faça login para continuar.");
      window.location.href = "/index.html";
    }
  });
};
