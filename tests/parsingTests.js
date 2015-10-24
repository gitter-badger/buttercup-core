var parsing = require("../source/tools/parsing.js");

module.exports = {

	getRandomChar: {

		testGetsChar: function(test) {
			var ch = parsing.getRandomChar("abc", 1);
			test.ok("abc".indexOf(ch) >= 0, "Should get one of the specified characters");
			test.done();
		},

		testGetsOne: function(test) {
			var ch = parsing.getRandomChar("abcdef");
			test.strictEqual(ch.length, 1, "Should output 1 character by default");
			test.done();
		}

	},

	hasDuplicateChars: {

		testDetectsDuplicates: function(test) {
			var dupes = parsing.hasDuplicateChars("abccd");
			test.ok(dupes, "Should detect duplicates");
			test.done();
		},

		testNoFalsePositive: function(test) {
			var unique = !parsing.hasDuplicateChars("abc def");
			test.ok(unique, "Should pass unique character strings");
			test.done();
		},

		testUsesCharacterRange: function(test) {
			var dupes = parsing.hasDuplicateChars("abcde  f", "s -!");
			test.ok(dupes, "Should use character range to find duplicates");
			var noDupes = !parsing.hasDuplicateChars("jjjipo", "ipo");
			test.ok(noDupes, "Should only use character range to find duplicates");
			test.done();
		}

	}

};
