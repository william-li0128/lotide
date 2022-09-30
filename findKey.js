// Testing function
const assertEqual = function(actual, expected) {
  let testResult = "";
  if (actual === expected) {
    testResult = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    testResult = `🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(testResult);
};

// Define function
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// test code
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(results1, "noma");

const results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);
assertEqual(results2, undefined);