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

// function my array checking tool
const eqArrays = function(arrayOne, arrayTwo) {
  let checkResult = true;
  if (arrayOne.length != arrayTwo.length) {
    checkResult = false;
  }
  for (let i in arrayOne) {
    if (arrayOne[i] !== arrayTwo[i]){
      checkResult = false;
    }
  }
  return checkResult;
};


// test code
console.log(eqArrays([1, 2, 3], [1, 2, 3]) )// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]) )// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);