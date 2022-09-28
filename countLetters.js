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

// count letters function starts from here
const countLetters = function(letters) {
  let results = {};
  letters = letters.replace(/\s/g, "");

  for (let letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

// test code starts from here

const result1 = countLetters("lighthouse in the house");

assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['g'], 1);
assertEqual(result1['h'], 4);
assertEqual(result1['t'], 2);
assertEqual(result1['o'], 2);
assertEqual(result1['u'], 2);
assertEqual(result1['s'], 2);
assertEqual(result1['e'], 3);
assertEqual(result1[" "], undefined);
assertEqual(result1['n'], 1);