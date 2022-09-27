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

// test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1.1);