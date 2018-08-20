const { subtract, subtract2 } = require('../../src/subtracting/subtract')

test('subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
})
test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract2(5)).toBe(3);
})
