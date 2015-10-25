var lib = require("../source/module.js"),
	PasswordGenerator = lib.PasswordGenerator;

module.exports = {

	setUp: function(cb) {
		this.passwordGenerator = new PasswordGenerator();

		cb();
	},

	generatePassword: {

		testThrowsExceptionNoCharsets: function(test) {
			var exc = null,
				pass = null;
			try {
				pass = this.passwordGenerator.generatePassword();
			} catch (e) {
				exc = e;
			}
			test.strictEqual(pass, null, "No password should be returned");
			test.notStrictEqual(exc, null, "Exception should be thrown");
			test.done();
		},

		testGeneratesDefaultLength: function(test) {
			var defaultLength = PasswordGenerator.DefaultPasswordLength;
			test.ok(defaultLength > 0, "Default length should be greater than 0");
			this.passwordGenerator
				.useCharacterSet(PasswordGenerator.CharacterSet.numbers)
				.useCharacterSet(PasswordGenerator.CharacterSet.lowerCaseLetters);
			var pass = this.passwordGenerator.generatePassword();
			test.strictEqual(pass.length, defaultLength, "Default generated length should be used");
			test.done();
		}

	},

	useCharacterSet: {

		testAddsSet: function(test) {
			test.strictEqual(this.passwordGenerator._characterSets.length, 0,
				"No character sets should be added by default");
			this.passwordGenerator.useCharacterSet(PasswordGenerator.CharacterSet.numbers);
			test.strictEqual(
				this.passwordGenerator._characterSets.indexOf(PasswordGenerator.CharacterSet.numbers),
				0,
				"Should add specified character set"
			);
			test.done();
		},

		testPreventsDuplicates: function(test) {
			this.passwordGenerator
				.useCharacterSet(PasswordGenerator.CharacterSet.upperCaseLetters)
				.useCharacterSet(PasswordGenerator.CharacterSet.upperCaseLetters);
			test.strictEqual(this.passwordGenerator._characterSets.length, 1,
				"Duplicate character sets should be filtered out");
			test.done();
		}

	}

};
