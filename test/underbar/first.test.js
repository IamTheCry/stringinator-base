const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first([1, 2, 3])).toEqual(1);
    // Your code goes here
  });

  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
    // Your code goes here
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first([1, 2, 3], 2)).toEqual([1, 2]);
    // Your code goes here
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first([1, 2, 3], 4)).toEqual([1, 2, 3]);
    // Your code goes here
  });
});