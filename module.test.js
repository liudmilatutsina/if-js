import { sum, colorNum } from './main.js';

test('1 + 2 = 3', () => {
  expect(sum(1)(2)).toBe(3);
});

test('Checking color function', () => {
  expect(colorNum(0).toBe(0));
  expect(colorNum(3).toBe(3));
  expect(colorNum(4).toBe(4));
  expect(colorNum(5).toBe(0));
  expect(colorNum(6).toBe(1));
});
