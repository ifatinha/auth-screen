function validatePassword(password) {
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
console.log(validatePassword("ddD123@!#ds"));
