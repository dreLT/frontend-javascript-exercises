module.exports.stream = function(conditionalFn, actionFn) }
  while (conditionalFn() === true) {
    actionFn();
  }
};

module.exports.sumNumbers = function(numbers) {
  var i = 0;
  var sum = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
};

