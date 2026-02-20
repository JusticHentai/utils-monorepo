import isSymmetric from '../../../../packages/learn-utils/src/leetcode/isSymmetric'

export default () => {
  // 构建对称二叉树:
  //       1
  //      / \
  //     2   2
  //    / \ / \
  //   3  4 4  3
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  }

  const result = isSymmetric(root as any)

  console.log('二叉树是否对称:', result)

  return result
}
