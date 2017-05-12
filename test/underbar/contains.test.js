const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const anArray = ['a','b','c','d'];
    expect(_.contains(anArray, 'a')).toEqual(true);
  });

  it('returns false if an array does not contain the target', () => {
    const anArray = ['a','b','c','d'];
    expect(_.contains(anArray, 'e')).toEqual(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const justiceLeague = {
      super: 'Man',
      bat: 'Man',
      the: 'Flash',
      fire: 'Storm'
    };
    expect(_.contains(justiceLeague, 'Storm')).toEqual(true)
  });

  it('returns false if the target value is not among the values of an object', () => {
    const batmanVsSuperman = {
      action: 'decent',
      best: 'Wonder Woman',
      worst: 'Superman'
    };
    expect(_.contains(batmanVsSuperman,'a good plot')).toEqual(false)
  });

});