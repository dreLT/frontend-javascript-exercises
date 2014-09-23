module.exports.reversePlusOne = function(array) {
  array.reverse().splice(0,0,1);
  return array;
};

module.exports.plusesEverywhere = function(array) {
  return array.join('+');
};

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};