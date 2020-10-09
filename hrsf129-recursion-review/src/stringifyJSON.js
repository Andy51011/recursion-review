// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check if obj is a number
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return String(obj);
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  // check if obj is an array Array.isArray
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
    }
    return `[${obj}]`;
  }
  // iterate over the array and check every value with recursion to see if its like a num, boolean,
  if (typeof obj === 'object') {
    // create a string variable (returnMe) to append things to
    var returnMe = '';


    var arrayOfObjects = [];
    var objectKeys = Object.keys(obj);
    if (objectKeys.length === 0) {
      return '{}';


    } else {
      for (var j = 0; j < objectKeys.length; j++) {
        // stringify the key and append it to returnMe
        if (obj[objectKeys[j]] === undefined || typeof obj[objectKeys[j]] === 'function') {
          continue;
        }
        returnMe += stringifyJSON(objectKeys[j]);
        // add a semicolon
        returnMe += ':';
        // stringify the value and append it to returnMe
        returnMe += stringifyJSON(obj[objectKeys[j]]);
        // add the comma
        returnMe += ',';
      }
      returnMe = returnMe.slice(0, returnMe.length - 1);

      return '{' + returnMe + '}';
    }
  }
};
