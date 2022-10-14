const findKeyByValue = function(targetObject, value) {
  for (const property in targetObject) {
    if (targetObject[property] === value) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;