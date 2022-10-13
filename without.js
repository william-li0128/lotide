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

module.exports = without;

// // test code
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const numbers = [1, 2, 3];
// let numberResult = without(numbers, [1]);
// assertArraysEqual(numberResult, [2,3]);