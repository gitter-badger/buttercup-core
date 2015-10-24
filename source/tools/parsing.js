(function(module) {

	"use strict";

	var crypto = require('crypto');

	var lib = module.exports = {

		getRandomChar: function(chars, count) {
			count = count || 1;
			var rnd = crypto.randomBytes(count),
				value = new Array(count),
				len = chars.length;

			for (var i = 0; i < count; i += 1) {
				value[i] = chars[rnd[i] % len]
			}

			return value.join('');
		},

		getRandomNumber: function(min, max) {
			max += 1;
			var rnd = crypto.randomBytes(1);
			return (rnd[0] % (max - min)) + min;
		}

	};

})(module);
