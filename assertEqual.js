// function implementation
const assertEqual = function(actual, expected) {
  let testResult = "";
  if (actual === expected) {
    testResult = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    testResult = `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(testResult);
};

module.exports = assertEqual;