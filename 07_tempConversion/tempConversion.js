const ftoc = function (fahrenheit) {
  let result = (fahrenheit - 32) * 0.555555556;
  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function (celcius) {
  let result = (celcius * 1.8) + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};