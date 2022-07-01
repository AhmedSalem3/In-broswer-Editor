const errors = {
  INVALID_PASSWORD: "Invalid Password",
  EMAIL_NOT_FOUND: "Email not found",
  OTHER: "Wrong Credientials"
};

export function formatError(message) {
  if (!message) return errors.OTHER;
  return message.toLowerCase().split("_").join(" ");
}

export default errors;
