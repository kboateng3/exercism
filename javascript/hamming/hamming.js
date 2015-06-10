var Hamming = {
  compute: function(input1, input2) {
    var i = 0,
      count = 0;
    if (input1.length == input2.length){
        for ( ; i < input1.length; i++){
          if(input1[i] != input2[i]){
            count++;
          }
      }
      return count;
    }
    else{
      throw 'DNA strands must be of equal length.'
    }
  }
};

module.exports = Hamming;
