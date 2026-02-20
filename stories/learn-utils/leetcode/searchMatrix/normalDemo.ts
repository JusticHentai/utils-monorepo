import searchMatrix from '../../../../packages/learn-utils/src/leetcode/searchMatrix'

export default () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  const target = 5

  const result = searchMatrix(matrix, target)

  console.log('矩阵:', matrix)
  console.log('目标值:', target)
  console.log('是否存在:', result)

  return result
}
