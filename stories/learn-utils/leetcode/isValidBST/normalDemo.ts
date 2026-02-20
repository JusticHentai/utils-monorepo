import isValidBST from '../../../../packages/learn-utils/src/leetcode/isValidBST'

export default () => {
  // 构建有效的 BST:
  //       2
  //      / \
  //     1   3
  const validBST = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }

  // 构建无效的 BST:
  //       5
  //      / \
  //     1   4
  //        / \
  //       3   6
  const invalidBST = {
    val: 5,
    left: { val: 1, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
  }

  const result1 = isValidBST(validBST as any)
  const result2 = isValidBST(invalidBST as any)

  console.log('有效 BST [2,1,3]:', result1)
  console.log('无效 BST [5,1,4,null,null,3,6]:', result2)

  return { valid: result1, invalid: result2 }
}
