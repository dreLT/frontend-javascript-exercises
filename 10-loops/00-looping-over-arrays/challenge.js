module.exports.sumNumbers = function(numbers) {
  var sum = 0;
  for (var index = 0; index <= (numbers.length - 1); index++) {
    sum = sum + numbers[index]; 
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  return inputString.toLowerCase().split(",");
};

module.exports.addIndex = function(inputData) {
  var outputData = [];
  for (var index = 0; index < inputData.length; index++) {
    outputData.push(index + " is " + inputData[index]);
  }
  return outputData;
};
