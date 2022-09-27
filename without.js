// function the array checking tool
const eqArrays = function(arrayOne, arrayTwo) {
  let checkResult = true;
  if (arrayOne.length !== arrayTwo.length) {
    checkResult = false;
  }
  for (let i in arrayOne) {
    if (arrayOne[i] !== arrayTwo[i]) {
      checkResult = false;
    }
  }
  return checkResult;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let testResult = "";
  if (eqArrays(arrayOne, arrayTwo)) {
    testResult = `✅✅✅ Assertion Passed: ${JSON.stringify(arrayOne)} === ${JSON.stringify(arrayTwo)}`;
  } else {
    testResult = `🛑🛑🛑  Assertion Failed: ${JSON.stringify(arrayOne)} !== ${JSON.stringify(arrayTwo)}`;
  }
  console.log(testResult);
};

// without function begins here
const withoutChecker = function(original, removals) {
  let keepOrNot = 1;
  for (let removal of removals) {
    if (original === removal) {
      keepOrNot = 0;
    }
  }
  return keepOrNot;
};

const without = function(originals, removals) {
  let withoutArray = [];
  for (let original of originals) {
    if (withoutChecker(original, removals)) {
      withoutArray.push(original);
    }
  }
  console.log(withoutArray);
  return withoutArray;
};

// test code
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [1, 2, 3];
let numberResult = without(numbers, [1]);
assertArraysEqual(numberResult, [2,3]);