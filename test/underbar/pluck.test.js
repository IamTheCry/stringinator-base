const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const peoples = [
    {name: 'Ed', age: 14},
    {name: 'Edd', age: 12},
    {name: 'Eddy', age: 13},
    ];
    const ages = _.pluck(peoples,'age');
    expect(ages).toEqual([14, 12, 13]);
  });

});