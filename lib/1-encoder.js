'use strict';

let encoder = function(phrase) {
	// Replace all number-like letters with numbers
	phrase = phrase
	.replaceAll('e','3')
	.replaceAll('g','8')
	.replaceAll('s','5')
	.replaceAll('b','6');

	// Replace whitespace with '$'
	phrase = phrase
	.replaceAll(' ','$');
	
	// Reverse phrase
	let reversedPhrase = "";
	for(let i = phrase.length-1; i >= 0; --i) { 
		reversedPhrase += phrase[i];
	}

	return reversedPhrase;
};

module.exports = encoder;
