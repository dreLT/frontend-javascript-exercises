module.exports.copy = function(inputObject) {
  var newObject = {};
  for (var property in inputObject) {
    newObject[property] = inputObject[property]; 
  }
  return newObject;
};

module.exports.extend = function(dest, src) {
  for (var property in src) {
    dest[property] = src[property];
  }
  return dest;
};

module.exports.hasElems = function(inputObject, inputArray) {
  var inputObject = Object.keys(inputObject);
  if (inputArray.length === 0) {
    return true;
  } else {
    for (var i = 0; i < inputObject.length; i++) {
      if (inputObject[i] !== inputArray[i]) {
        return inputObject[i] === inputArray[i];
      }
      else if (i === (inputObject.length - 1)) {
        return inputObject[i] === inputArray[i];
      }
    }
  }
};