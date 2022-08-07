'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should define empty string as isogram', () => {
    const expectedResult = isIsogram('');

    expect(expectedResult).toBe(true);
  });

  it('should be case insensitive', () => {
    const expectedResult = isIsogram('Aa');

    expect(expectedResult).toBe(false);
  });

  it('should return false for string with none latin symbols', () => {
    const expectedResult = isIsogram('a *');

    expect(expectedResult).toBe(false);
  });
});
