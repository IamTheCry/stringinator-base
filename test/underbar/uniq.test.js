const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const list = [1, 1, 2, 2, 3, 3, 4, 4];
    expect(_.uniq(list)).toEqual([1, 2, 3, 4]);
  });
});