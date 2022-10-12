// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([2]), 2);
// assertEqual(head(), undefined);

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("return 2 for [2]", () => {
    assert.strictEqual(head([2]), 2);
  });

  it("return undefined for null", () => {
    assert.strictEqual(head(), undefined);
  });

  it("return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});