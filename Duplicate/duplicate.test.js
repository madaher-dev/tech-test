import duplicate from './duplicate.js';

test('Returns input array without duplicates', () => {
  expect(
    duplicate([
      'not',
      'a',
      'pheasant',
      'plucker',
      'but',
      'a',
      'pheasant',
      "plucker's",
      'son',
    ])
  ).toStrictEqual([
    'not',
    'a',
    'pheasant',
    'plucker',
    'but',
    "plucker's",
    'son',
  ]);
});
