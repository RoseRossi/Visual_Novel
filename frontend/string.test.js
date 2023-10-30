const checkString = require('./string.js');

test('checks if a string is not empty', () => {
  expect(checkString('Hi')).toBe(true);
  expect(checkString('')).toBe(false);
});