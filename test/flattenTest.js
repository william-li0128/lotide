const assert = require('chai').assert;
const flatten = require('../flatten');

// // testing code
// const originalArray = [1, 2, [3, 4], 5, [6]];
// let flattenArray = flatten(originalArray);
// assertArraysEqual(flattenArray, [1, 2, 3, 4, 5, 6]);

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});