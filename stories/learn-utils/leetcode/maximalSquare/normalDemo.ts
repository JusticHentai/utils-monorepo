import maximalSquare from '@jqxon/learn-utils/leetcode/maximalSquare'

export default () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]

  const result = maximalSquare(matrix)

  console.log('矩阵:', matrix)
  console.log('最大正方形面积:', result)

  return result
}
