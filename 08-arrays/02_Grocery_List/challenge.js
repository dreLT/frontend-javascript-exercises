module.exports.addItem = function(item,list) {
  if (list.indexOf(item) > -1) {
    return list;
  } else {  
    list.push(item); 
    return list;
  }
};

module.exports.reverseSortedList = function(list) {
  return list.sort().reverse();
};