(function(module) {

	"use strict";

	var parsingTools = require(GLOBAL.root + "/tools/parsing.js");

	var CHAR_SET_MIN = 					2,
		PASS_DEFAULT_LEN = 				12;

	/**
	 * Password generator
	 * @class PasswordGenerator
	 */
	var PasswordGenerator = function() {
		this._characterSets = [];
	};

	/**
	 * Generate a password
	 * @param {Number=} length The length of the generated password (default: PASS_DEFAULT_LEN)
	 * @returns {String}
	 * @memberof PasswordGenerator
	 */
	PasswordGenerator.prototype.generatePassword = function(length) {
		if (this._characterSets.length < CHAR_SET_MIN) {
			throw new Error("At least " + CHAR_SET_MIN + " character sets must be used");
		}
		length = length || PASS_DEFAULT_LEN;
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
			if ((charset.validEndCap === false && (trial.length > 1 || trial.length < length)) ||
				charset.validEndCap === true) {
				if (charset.isValidTriplet(triplet)) {
					password = trial;
					charChecks.push(charset.isValidTriplet);
				}
			}
		}
		return password;
	};

	/**
	 * Add a character set to the generator
	 * @param {}
	 */
	PasswordGenerator.prototype.useCharacterSet = function(charSet) {
		this._characterSets.push(charSet);
		var finalSets = [],
			finalNames = [];
		for (var i = 0, csLen = this._characterSets.length; i < csLen; i += 1) {
			var cSet = this._characterSets[i];
			if (finalNames.indexOf(cSet.title) < 0) {
				finalSets.push(cSet);
				finalNames.push(cSet.title);
			}
		}
		this._characterSets = finalSets;
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
		return charSet;
	};

	/**
	 * Password generator character set
	 * @typedef {Object} CharacterSet
	 * @property {String} title - The title of the character set
	 * @property {Function} getChar - Get a character from the set
	 * @property {Function} isValidTriplet - Validate a string of characters, up to 3 in length
	 * @property {Number} regularity - How regular the char can be: 1 is regular, higher is rare
	 * @property {Boolean} validEndCap - Whether the character set can be used for either end of the password
	 */

	/**
	 * Character sets for the password generator
	 * @name CharacterSet
	 * @type {Object}
	 * @memberof PasswordGenerator
	 */
	PasswordGenerator.CharacterSet = {

		/**
		 * Dash character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
		dash: {
			title: "Dash/minus (-)",
			getChar: function() {
				return "-";
			},
			isValidTriplet: function(triplet) {
				return /(^|[^-])-($|[^-])/.test(triplet);
			},
			regularity: 10,
			validEndCap: true
		},

		/**
		 * Lower-case letters character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
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
			regularity: 1,
			validEndCap: true
		},

		/**
		 * Numbers character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
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
			regularity: 1,
			validEndCap: true
		},

		/**
		 * Special characters character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
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
				regularity: 4,
				validEndCap: true
			};
		})(),

		/**
		 * Underscore character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
		underscore: {
			title: "Underscore (_)",
			getChar: function() {
				return "_";
			},
			isValidTriplet: function(triplet) {
				return /(^|[^_])_($|[^_])/.test(triplet);
			},
			regularity: 10,
			validEndCap: true
		},

		/**
		 * Upper-case letter character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
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
			regularity: 1,
			validEndCap: true
		},

		/**
		 * Whitespace character set
		 * @type {CharacterSet}
		 * @memberof PasswordGenerator.CharacterSet
		 */
		whitespace: {
			title: "Whitespace ( )",
			getChar: function() {
				return " ";
			},
			isValidTriplet: function(triplet) {
				return /(^|[^ ]) ($|[^ ])/.test(triplet);
			},
			regularity: 10,
			validEndCap: false
		}

	};

	/**
	 * Default generated password length
	 * @static
	 * @memberof PasswordGenerator
	 * @type {Number}
	 */
	PasswordGenerator.DefaultPasswordLength = PASS_DEFAULT_LEN;

	/**
	 * Minimum character sets allowed
	 * @static
	 * @memberof PasswordGenerator
	 * @type {Number}
	 */
	PasswordGenerator.MinimumCharacterSets = CHAR_SET_MIN;

	module.exports = PasswordGenerator;

})(module);
