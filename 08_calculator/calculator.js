const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let result = 0;
  array.forEach(function (item) {
    result += item;
  });
  return result;
};// Array.reduce works too!

const multiply = function (array) {
  if (array.length < 2) {
    return "Enter 2 numbers or more!";
  }
  let result = 1;
  array.forEach(function (item) {
    result *= item;
  });
  return result;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if(num === 0){
    return 1;
  }
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};