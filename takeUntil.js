// test tool code
// function my array checking tool
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

// function below

const takeUntil = function(array, callback) {
  let untilResult = [];
  for (const element of array) {
    if (!callback(element)) {
      untilResult.push(element);
    } else {
      return untilResult;
    }
  }
};

// Test code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);