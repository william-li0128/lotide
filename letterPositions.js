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

module.exports = letterPositions;

// // Test code starts from here
// assertArraysEqual(letterPositions("hello my friend").e, [1, 10]);