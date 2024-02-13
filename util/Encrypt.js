const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};
const comparePassword = (password, hash) => {
  const flag = bcrypt.compareSync(password, hash);

  return flag;
};

module.exports = { encryptPassword, comparePassword };
