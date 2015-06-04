//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  var response = ["Hello", "world!"]

  if ((input.length < 1) || (response.indexOf(input) != -1)){
    return response.join(", ");
  }
  return response[0] + ", " + input + "!" ;


};

module.exports = HelloWorld;
