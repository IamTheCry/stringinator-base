const stringinator = require('../../stringinator');

describe('removeChar()', () => {
  it('removes a target char', () => {
    expect(stringinator.removeChar('bubbles', 'u')).toEqual('bbbles');
  });
  it('removes all instances of a target char', () => {
    expect(stringinator.removeChar('bububules', 'u')).toEqual('bbbles');
  });
});
