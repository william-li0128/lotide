# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install william-li/lotide`

**Require it:**

`const _ = require('william-li/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: simpler array-handling functions to retrieve the first element from the array.
* `tail(array)`: simpler array-handling functions to retrieve every element except the head (first element) of the array.
* `without(array)`: return a subset of a given array, removing unwanted elements.
* `flatten(array)`: take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `middle(array)`: take in an array and return the middle-most element(s) of the given array.
* `countOnly(array, object)`: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `countLetters(string)`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions(string)`: return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(object, value)`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `map(array, callback)`: takes in an array and a callback function. It would return a new array which contains the result of all elements processed by the callback function.
* `takeUntil(array, callback)`: return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `findKey(object, callback)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.