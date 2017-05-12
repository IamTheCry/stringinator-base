const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const anArray = [1, 2, 3, 4, 5];
      expect(_.every(anArray)).toEqual(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const anArray = [1, 3, 5];
      expect(_.every(anArray, (n) => n % 2 === 1)).toEqual(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const anArray = [0, 1, 3, 5];
      expect(_.every(anArray, (n) => n % 2 === 1)).toEqual(false);
    });

  });
});