// function below

const takeUntil = function(array, callback) {
  let untilResult = [];
  for (const element of array) {
    if (!callback(element)) {
      untilResult.push(element);
    } else {
      return untilResult;
    }
  }
};

module.exports = takeUntil;

// // Test code

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);