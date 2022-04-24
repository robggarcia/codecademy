/*
Rob Garcia
April 24, 2022
CodeCademy: Rooster Regulation
Construct a test suite for an experimental rooster object.
*/
// import the assert module
const assert = require('assert');
// import the Rooster moddule from ./index
const Rooster = require('../index.js');

// write a describe block for Rooster
describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Define expected output
      const expected = 'cock-a-doodle-doo!';

      // Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();
      // Use an assert method to compare actual and expected result
      assert.equal(expected, actual);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its arguments as a string', () => {
      const expected = 'string';
      const actual = typeof Rooster.timeAtDawn(4);
      assert.strictEqual(actual, expected);
    })
    it('throws an error if passed a number less than 0', () => {
      assert.throws(() => {
          Rooster.timeAtDawn(-4);
        },
        RangeError
      );
    });
    it('throws an error if passed a number greater than 23', () => {
      assert.throws(() => {
          Rooster.timeAtDawn(28);
        },
        RangeError
      );
    });
  })
});
