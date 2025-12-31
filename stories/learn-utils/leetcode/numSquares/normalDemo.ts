import numSquares from '@jqxon/learn-utils/leetcode/numSquares'

export default () => {
  const n = 12

  const result = numSquares(n)

  console.log('n =', n)
  console.log('最少完全平方数个数:', result)
  console.log('12 = 4 + 4 + 4')

  return result
}
