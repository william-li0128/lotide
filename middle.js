// actual middle function starts here
const middle = function(numArray) {
  let middleNum = [];
  let anchor1 = 0;
  let anchor2 = 0;
  if (numArray.length > 2) {
    if (numArray.length % 2 === 1) {
      anchor1 = (numArray.length - 1) / 2;
      middleNum.push(numArray[anchor1]);
    } else {
      anchor1 = numArray.length / 2 - 1;
      anchor2 = anchor1 + 1;
      middleNum.push(numArray[anchor1], numArray[anchor2]);
    }
  }
  return middleNum;
};

module.exports = middle;