// function starts from here

const findKeyByValue = function(targetObject, value) {
  for (const property in targetObject) {
    if (targetObject[property] === value) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// // code check below
// const bestTVShowsByGenre = {
//   scienceFiction: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);