import findNumberIn2DArray from '../src/findNumberIn2DArray'

test('测试 src/twoSum.ts', () => {
  expect(
    findNumberIn2DArray(
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      5
    )
  ).toBe(true)
})
