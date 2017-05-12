const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    expect(_.filter(nums, (odd) => odd % 2 === 1)).toEqual([1, 3, 5, 7]);
  });

  it('filters an object to only numeric values', () => {
    const stuff = [1, 'a', 3, 'd', 5, 'f', 7];
    expect(_.filter(stuff, (nums) => typeof(nums) === 'number')).toEqual([1, 3, 5, 7]);
  });
});