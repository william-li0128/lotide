// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const head = require('../head');

//test assertions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head(), undefined);