const checkString = require('./string.js');

test('checks if a string is not empty', () => {
  expect(checkString('Test')).toBe(true);
  expect(checkString('')).toBe(false);
});