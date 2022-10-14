// flatten function created
const flatten = function(originalArray) {
  let flattenArray = [];
  for (let unitArray of originalArray) {
    if (Array.isArray(unitArray)) {
      for (let unit of unitArray) {
        flattenArray.push(unit);
      }
    } else {
      flattenArray.push(unitArray);
    }
  }
  return flattenArray;
};

module.exports = flatten;