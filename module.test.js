import { dateTransform, arraySearch } from './main.js';

test('data func check', () => {
  expect(dateTransform('2020-08-26')).toBe('26.08.2020');
  expect(dateTransform('1997-10-06')).toBe('06.10.1997');
});

test('array search check', () => {
  expect(arraySearch('Berlin')).toStrictEqual(['Germany, Berlin, Hostel Friendship', 'Germany, Berlin, Hotel Rehberge Berlin Mitte']);
  expect(arraySearch('Marocco')).toStrictEqual(['Marocco, Ourika, Rokoko Hotel']);
});
