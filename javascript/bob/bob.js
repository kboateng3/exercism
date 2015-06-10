//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

var isQuestion = function(input) {
  if (isYell(input)){
    return false
  }
  return input.charAt(input.length-1) == '?';
}

var isBlank = function(input) {
  if(input == ''){
    return true;
  }else{
    for (var i = 0; i < input.length-1; i++) {
      if(input[i] != ' '){
        return false;
      }
    }
    return true;
  }
}

var isYell = function(input) {
  return input == input.toUpperCase() && input != input.toLowerCase();
}

Bob.prototype.hey = function(input) {
  if (isQuestion(input)){
    return 'Sure.';
  }if (isBlank(input)) {
    return 'Fine. Be that way!';
  }
  if (isYell(input)){
    return 'Whoa, chill out!';
  }else {
    return 'Whatever.';
  }
};

module.exports = Bob;
