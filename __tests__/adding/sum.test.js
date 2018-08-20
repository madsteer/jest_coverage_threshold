const { sum, add2 } = require('../../src/adding/sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
