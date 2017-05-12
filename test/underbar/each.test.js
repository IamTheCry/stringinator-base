const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const someArray = [1, 2, 3];
    let count = 0;
    _.each(someArray, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toEqual(3);
    // Your code goes here
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const someArrayLike = {
      length: 3,
      1: 1,
      2: 2,
      3: 3
    };
    let count = 0;
    _.each(someArrayLike, function(element, index, array) {
      expect(element).toEqual(someArrayLike[index]);
      count += 1;
    });
    expect(count).toEqual(3);
    // Your code goes here
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      store: 'Target',
      location: 'Downtown',
      restroom: false
    };
    let count = 0;
    _.each(obj, function(element, index, array) {
      expect(element).toEqual(obj[index]);
      count+=1;
    })
    expect(count).toEqual(3)
    // Your code goes here
  });
});

