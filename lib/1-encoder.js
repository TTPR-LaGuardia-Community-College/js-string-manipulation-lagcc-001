'use strict';

var encoder = function(phrase){
  //code your solution here
  // encoding a's for 0's
  phrase = phrase.replace(/a/g, "1");
  // encoding e's for 3's
  phrase = phrase.replace(/e/g, "5");
  // encoding i's for 1's
  phrase = phrase.replace(/i/g, "2");
  // encoding o's for 9's
  phrase = phrase.replace(/o/g, "9");
  // encoding u's for 7's
  phrase = phrase.replace(/u/g, "7");
  // getting rid of space
  phrase = phrase.replace(/ /g, "$");
  // reverse string... fucking Javascript!
  var array1 = phrase.split("");
  array1 = array1.reverse();
  phrase = array1.join(""); 
  return phrase;
};

module.exports = encoder;
