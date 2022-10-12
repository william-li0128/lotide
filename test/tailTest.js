// test/assertEqualTest.js
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//test code

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const oneElement = [1];
console.log(tail(oneElement)); // An array with only one element should yield an empty array for its tail

const emptyArray = [];
console.log(tail(emptyArray)); // An empty array should yield an empty array for its tail