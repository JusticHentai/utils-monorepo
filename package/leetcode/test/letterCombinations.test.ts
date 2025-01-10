import letterCombinations from '../src/letterCombinations'

test('测试 src/letterCombinations.ts', () => {
  expect(letterCombinations('23')).toStrictEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ])
})
