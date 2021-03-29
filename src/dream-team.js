const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  return array.filter(item => typeof item === "string")
            .map(item => item.trim().toUpperCase())
            .map(item => item.slice(0, 1))
            .sort()
            .join("");
};
