const register = require("./register");
const verifyEmail = require("./verifyEmail");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateUserAvatar = require("./updateUserAvatar");

module.exports = {
  register,
  verifyEmail,
  login,
  logout,
  getCurrent,
  updateUserAvatar,
};
