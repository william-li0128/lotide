const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyList1 = Object.keys(object1);
  const keyList2 = Object.keys(object2);
  if (keyList1.length !== keyList2.length) {
    return false;
  }
  for (const key of keyList1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
   }
  }
  return true;
};

module.exports = eqObjects;