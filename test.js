const stringLength = require('./test-function.js');

describe('String length', () => {
  test('The number of characters in a string', () => {
    // Arrange
    const stringObj = { str: 'David', length: 5 };

    // Act
    const strLength = stringLength(stringObj.str);

    // Assert
    expect(strLength).toEqual(stringObj.length);
  });
});