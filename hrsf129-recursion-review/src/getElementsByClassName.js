// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var foundElement = [];
  var search = function(elements) {
    // if statement to check classList is not undefined and whether or not it is contained in className
    if (elements.classList !== undefined && elements.classList.contains(className)) {
      //
      foundElement.push(elements);

    }
    if (elements.childNodes) {
      var child = elements.childNodes;
      // iterate over child nodes
      for (var i = 0; i < child.length; i++) {
        search(child[i]);

      }
    }

  };
  // create search array;
  search(document.body);

  return foundElement;
};


//  You should use document.body, element.childNodes, and element.classList