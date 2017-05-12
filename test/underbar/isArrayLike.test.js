const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toEqual(true);
    // Your code goes here
  });

  it('returns true for an array-like object', () => {
    const arrayObj = {
      length: 2
    }
    expect(_.isArrayLike(arrayObj)).toEqual(true);
    // Your code goes here
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayObj = {
      fakeLength: 2
    }
    expect(_.isArrayLike(nonArrayObj)).toEqual(false);
    // Your code goes here
  });
});
