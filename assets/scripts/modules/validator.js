export function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_-])[a-zA-Z\d@$!%*?&#_-]{8,}/;
  let err;

  if (typeof password !== "string") {
    err = new Error("Expected a string as input");
  }

  if (!regex.test(password)) {
    err = new Error("Password validation failed");
    throw err;
  }

  return true;
}

//ddD123@!#ds

export function validateEmail(email) {
  const regex = /^[\w.-]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
  let err;

  if (typeof email !== "string") {
    err = new Error("Expected a string as input");
    throw err;
  }

  if (!regex.test(email)) {
    err = new Error("Email validation failed");
    throw err;
  }

  return true;
}
