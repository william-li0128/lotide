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

const letterPositions = function(sentence) {
  const results = {};

  //remove space in the sentence here
  sentence = sentence.replace(/\s/g, "");

  //create a character index counting tool
  let charIndex = -1;

  for (const letter of sentence) {
    charIndex += 1;
    if (results[letter]) {
      results[letter].push(charIndex);
    } else {
      results[letter] = [charIndex];
    }
  }

  console.log(results);
  return results;
};

// Test code starts from here
assertArraysEqual(letterPositions("hello my friend").e, [1, 10]);