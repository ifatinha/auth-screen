import { formLoginValidator } from "./modules/formLoginValidator.js";
import { formRegisterValidor } from "./modules/formRegisterValidator.js";

document.addEventListener("DOMContentLoaded", () => {
  formLoginValidator();
  formRegisterValidor();
});
