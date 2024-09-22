export function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}/;
  let err;

  if (typeof password !== "string") {
    err = new Error("Expected a string as input");
  }

  if (!regex.test(password)) {
    err = new Error("Password validation failed");
    err.input = "password";
    throw err;
  }

  return true;
}

export function validateEmail(email) {
  const regex = /^\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
  let err;

  if (typeof email !== "string") {
    err = new Error("Expected a string as input");
    err.email = "email";
    throw err;
  }

  if (!regex.test(email)) {
    err = new Error("Email validation failed");
    throw err;
  }

  return true;
}