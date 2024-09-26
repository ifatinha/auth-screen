export const displayError = (element, message) => {
  element.textContent = message;
  element.classList.add("error");
};

