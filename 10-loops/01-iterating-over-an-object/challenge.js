module.exports.getKeys = function(inputObject) {
  var propertyArray = [];
  for (var property in inputObject) {
    propertyArray.push(property);
  }
  return propertyArray;
};

module.exports.getValues = function(inputObject) {
  var valuesArray = [];
  for (var property in inputObject) {
    valuesArray.push(inputObject[property]);
  }
  return valuesArray;
};

module.exports.objectToArray = function(inputObject) {
  var outputArray = [];
  for (var property in inputObject) {
    outputArray.push(property + ' is ' + inputObject[property]);
  }
  return outputArray;
};