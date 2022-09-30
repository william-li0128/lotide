// Test tool
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

// map function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Code check

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const numbers = [10, 20, 30, 41, 52];
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2, [ 20, 40, 60, 82, 104 ]);

const results3 = map(results1, letter => letter.toUpperCase());
assertArraysEqual(results3, [ 'G', 'C', 'T', 'M', 'T' ]);