const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    expect(_.reject(nums, (odd) => odd % 2 === 1)).toEqual([2, 4, 6]);
  });

  it('rejects null values from an object', () => {
    const startingItems = {
      talismans: null,
      wraith: 'bands',
      brace: 'sirs'
    };
    expect(_.reject(startingItems, (val) => val === null)).toEqual(['bands','sirs']);
  });
});