//tail function defined
const tail = function(array) {
  let tailedArray = [];
  tailedArray = array.slice(1);
  return tailedArray;
};

module.exports = tail;