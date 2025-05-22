'use strict';

var decoder = function(encoded){
  //code your solution here
  //unreverse
  encoded = encoded.split("");
  encoded = encoded.reverse();
  encoded = encoded.join("");
  //put spaces back in
  encoded = encoded.replace(/[$]/g, " ");
  encoded = encoded.replace(/7/g, "u");
  encoded = encoded.replace(/9/g, "o");
  encoded = encoded.replace(/2/g, "i");
  encoded = encoded.replace(/5/g, "e");
  encoded = encoded.replace(/1/g, "a")
  // debugger
  return encoded;
};

module.exports = decoder;

