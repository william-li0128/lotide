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

// actual middle function starts here
const middle = function(numArray) {
  let middleNum = [];
  let anchor1 = 0;
  let anchor2 = 0;
  if (numArray.length > 2) {
    if (numArray.length % 2 === 1) {
      anchor1 = (numArray.length - 1) / 2;
      middleNum.push(numArray[anchor1]);
    } else {
      anchor1 = numArray.length / 2 - 1;
      anchor2 = anchor1 + 1;
      middleNum.push(numArray[anchor1], numArray[anchor2]);
    }
  }
  return middleNum;
};

// test code here
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);