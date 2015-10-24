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
			return (min === max) ? min : (function() {
				max += 1;
				var rnd = crypto.randomBytes(1);
				return (rnd[0] % (max - min)) + min;
			})();
		},

		hasDuplicateChars: function(text, characters) {
			characters = characters || "";
			var coll = "",
				useChars = characters.length > 0;
			for (var i = 0, tLen = text.length; i < tLen; i += 1) {
				if (coll.indexOf(text[i]) >= 0) {
					return (useChars) ? characters.indexOf(text[i]) > 0 : true;
				}
				coll += text[i];
			}
			return false;
		}

	};

})(module);
