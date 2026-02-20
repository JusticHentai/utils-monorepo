import mergeArray from '../../../../packages/learn-utils/src/leetcode/mergeArray'

export default () => {
  const A = [1, 2, 3, 0, 0, 0]
  const m = 3
  const B = [2, 5, 6]
  const n = 3

  mergeArray(A, m, B, n)

  console.log('合并后的数组:', A)

  return A
}
