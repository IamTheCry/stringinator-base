const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const anArray = [2, 4, 6, 8, 9];
    expect(_.some(anArray, (n) => n % 2 === 1)).toEqual(true);
  });

  it('returns false if no number is odd', () => {
    const anArray = [2, 4, 6, 8, 9];
    expect(_.some(anArray, (n) => n % 2 === 1)).toEqual(true);
  });

});