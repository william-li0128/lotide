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

// flatten function created
const flatten = function(originalArray) {
  let flattenArray = [];
  for (let unitArray of originalArray) {
    if (Array.isArray(unitArray)) {
      for (let unit of unitArray) {
        flattenArray.push(unit);
      }
    } else {
      flattenArray.push(unitArray);
    }
  }
  return flattenArray;
};

// testing code
const originalArray = [1, 2, [3, 4], 5, [6]];
let flattenArray = flatten(originalArray);
assertArraysEqual(flattenArray, [1, 2, 3, 4, 5, 6]);