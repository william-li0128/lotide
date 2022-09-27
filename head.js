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

// function head
const head =  function(array) {
  let firstItem = undefined;
  if (array !== undefined) {
    firstItem = array[0];
  }
  return firstItem;
};

//test assertions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head(), undefined);