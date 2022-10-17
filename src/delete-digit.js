const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var result = 0,
    numDigits = [];
  while (n) {
    numDigits.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (var index = 0; index < numDigits.length; index++) {
    var n = 0;
    for (var i = numDigits.length - 1; i >= 0; i--) {
      if (i !== index) {
        n = n * 10 + numDigits[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit,
};
