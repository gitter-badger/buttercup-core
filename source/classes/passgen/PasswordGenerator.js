(function(module) {

	"use strict";

	var parsingTools = require(GLOBAL.root + "/tools/parsing.js");

	var PasswordGenerator = function() {
		this._characterSets = [];
	};

	PasswordGenerator.prototype.generatePassword = function(length) {
		length = length || 12;
		var password = "",
			charChecks = [];
		while (password.length < length) {
			var charset = PasswordGenerator.pickCharacterSet(this._characterSets),
				character = charset.getChar(),
				trial = password + character,
				triplet = trial;
			if (triplet.length > 3) {
				triplet = triplet.substr(triplet.length - 3);
			}
			if (charset.isValidTriplet(triplet)) {
				password = trial;
				charChecks.push(charset.isValidTriplet);
			}
		}
		return password;
	};

	PasswordGenerator.prototype.useCharacterSet = function(charSet) {
		this._characterSets.push(charSet);
		return this;
	};

	PasswordGenerator.pickCharacterSet = function(charSets) {
		var index = parsingTools.getRandomNumber(0, charSets.length - 1);
		return charSets[index];
	};

	PasswordGenerator.CharacterSet = {

		lowerCaseLetters: {
			title: "Lower-case letters (a-z)",
			getChar: function() {
				return parsingTools.getRandomChar(
						"abcdefghijklmnopqrstuvwxyz"
					);
			},
			isValidTriplet: function(triplet) {
				return /(^|[^a-z])[a-z]($|[^a-z])/.test(triplet);
			}
		},

		numbers: {
			title: "Numbers (0-9)",
			getChar: function() {
				return parsingTools.getRandomChar(
						"0123456789"
					);
			},
			isValidTriplet: function(triplet) {
				return /(^|[^0-9])[0-9]($|[^0-9])/.test(triplet)
			}
		},

		upperCaseLetters: {
			title: "Upper-case letters (A-Z)",
			getChar: function() {
				return parsingTools.getRandomChar(
						"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
					);
			},
			isValidTriplet: function(triplet) {
				return /(^|[^A-Z])[A-Z]($|[^A-Z])/.test(triplet);
			}
		}

	};

	module.exports = PasswordGenerator;

})(module);
