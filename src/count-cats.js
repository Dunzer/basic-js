const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let quant = 0;
  for (let cats of array) {
    for(let cat of cats)  {
      if(cat == "^^") {
        quant += 1
      }
    } 
  }
  return quant
};
