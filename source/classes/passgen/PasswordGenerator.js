(function(module) {

	"use strict";

	var parsingTools = require(GLOBAL.root + "/tools/parsing.js");

	var CHAR_SET_MIN = 					2;

	/**
	 * Password generator
	 * @class PasswordGenerator
	 */
	var PasswordGenerator = function() {
		this._characterSets = [];
	};

	/**
	 * Generate a password
	 * @param {Number=} length The length of the generated password (default: 12)
	 * @returns {String}
	 * @memberof PasswordGenerator
	 */
	PasswordGenerator.prototype.generatePassword = function(length) {
		if (this._characterSets.length < CHAR_SET_MIN) {
			throw new Error("At least " + CHAR_SET_MIN + " character sets must be used");
		}
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
		var charSet = null;
		while (charSet === null) {
			var index = parsingTools.getRandomNumber(0, charSets.length - 1),
				reg = (charSets[index].regularity || 1) - 1;
			reg = (reg < 0) ? 0 : reg;
			var randomPick = parsingTools.getRandomNumber(0, reg);
			if (randomPick === reg) {
				charSet = charSets[index];
			}
		}
		return charSet;//charSets[index];
	};

	PasswordGenerator.CharacterSet = {

		dash: {
			title: "Dash/minus (-)",
			getChar: function() {
				return parsingTools.getRandomChar(
						"-"
					);
			},
			isValidTriplet: function(triplet) {
				return /(^|[^-])-($|[^-])/.test(triplet);
			},
			regularity: 10
		},

		lowerCaseLetters: {
			title: "Lower-case letters (a-z)",
			getChar: function() {
				return parsingTools.getRandomChar(
						"abcdefghijklmnopqrstuvwxyz"
					);
			},
			isValidTriplet: function(triplet) {
				return /(^|[^a-z])[a-z]($|[^a-z])/.test(triplet);
			},
			regularity: 1
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
			},
			regularity: 1
		},

		special: (function() {
			var specialChars = "!@#$%^~&*+=|;:,.?";
			return {
				title: "Special (+=@#*&^% etc.)",
				getChar: function() {
					return parsingTools.getRandomChar(specialChars);
				},
				isValidTriplet: function(triplet) {
					return parsingTools.hasDuplicateChars(triplet, specialChars) === false;
				},
				regularity: 4
			};
		})(),

		underscore: {
			title: "Underscore (_)",
			getChar: function() {
				return parsingTools.getRandomChar(
						"_"
					);
			},
			isValidTriplet: function(triplet) {
				return /(^|[^_])_($|[^_])/.test(triplet);
			},
			regularity: 10
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
			},
			regularity: 1
		}

	};

	PasswordGenerator.MinimumCharacterSets = CHAR_SET_MIN;

	module.exports = PasswordGenerator;

})(module);
