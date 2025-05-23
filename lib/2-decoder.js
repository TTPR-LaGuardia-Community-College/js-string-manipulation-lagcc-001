'use strict';

let decoder = function(encoded) {
	// Replace all numbers with letters
	encoded = encoded
	.replaceAll('3','e')
	.replaceAll('8','g')
	.replaceAll('5','s')
	.replaceAll('6','b');

	// Replace all '$' with whitespace
	encoded = encoded
	.replaceAll('$',' ');

	// Reverse encoded
	let reversedEncoded = "";
	for(let i = encoded.length-1; i >= 0; --i) {
		reversedEncoded += encoded[i];
	}

	return reversedEncoded;
};

module.exports = decoder;
