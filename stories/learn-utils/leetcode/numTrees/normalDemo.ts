import numTrees from '../../../../packages/learn-utils/src/leetcode/numTrees'

export default () => {
  const n = 3

  const result = numTrees(n)

  console.log('n =', n)
  console.log('不同的二叉搜索树数量:', result)

  return result
}
