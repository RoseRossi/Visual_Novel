const checkString = require('./string.js');

test('checks if a string is not empty', () => {
  expect(checkString('Nice')).toBe(true);
  expect(checkString('')).toBe(false);
});