import {sum, colorParagraph} from './main.js';

test('1 + 2 = 3', () => {
  expect(sum(1)(2)).toBe(3);
});

test('Checking color function', () => {
  expect(colorParagraph(0).toBe(0));
  expect(colorParagraph(3).toBe(3));
  expect(colorParagraph(4).toBe(4));
  expect(colorParagraph(5).toBe(0));
  expect(colorParagraph(6).toBe(1));
});