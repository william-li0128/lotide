// function head
const head =  function(array) {
  let firstItem = undefined;
  if (array !== undefined) {
    firstItem = array[0];
  }
  return firstItem;
};

module.exports = head;