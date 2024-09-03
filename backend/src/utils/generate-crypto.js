import bcrypt from "bcryptjs";
export const genSalt = (rounds) => {
  return bcrypt.genSalt(rounds);
};
export const hashPassword = (password, salt) => {
  return bcrypt.hash(password, salt);
}
