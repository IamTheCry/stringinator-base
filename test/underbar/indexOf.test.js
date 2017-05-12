const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf([1, 2, 3], 1)).toEqual(0)
    // Your code goes here
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf([1, 2, 3], 3)).toEqual(2)
    // Your code goes here
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf([1, 2, 3], 4)).toEqual(-1)
    // Your code goes here
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf([1, 2, 3, 1, 2, 3, 1, 2, 3], 3)).toEqual(2)
    // Your code goes here
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf([1, 2, 3, 1, 2, 3, 1, 2, 3], 3, 3)).toEqual(5)
    // Your code goes here
  });

});