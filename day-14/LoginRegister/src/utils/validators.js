export function loginValidator(values) {
  const errors = {};

  if (!values.email) errors.email = "Email required";
  if (!values.password) errors.password = "Password required";

  return errors;
}

export function registerValidator(values) {
  const errors = {};

  if (!values.email) errors.email = "Email required";
  if (!values.password || values.password.length < 6)
    errors.password = "Password must be 6+ chars";

  return errors;
}
