import rob from '../../../../packages/learn-utils/src/leetcode/rob2'

export default () => {
  // 构建二叉树:
  //     3
  //    / \
  //   2   3
  //    \   \
  //     3   1
  const root = {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 3,
      left: null,
      right: { val: 1, left: null, right: null },
    },
  }

  const result = rob(root as any)

  console.log('二叉树: [3,2,3,null,3,null,1]')
  console.log('最大金额:', result)
  console.log('偷 3 + 3 + 1 = 7')

  return result
}
