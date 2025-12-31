// lowestCommonAncestor 需要 TreeNode 类型，这里展示算法思路
export default () => {
  // 构建二叉树:
  //         3
  //        / \
  //       5   1
  //      / \ / \
  //     6  2 0  8
  //       / \
  //      7   4
  const tree = {
    val: 3,
    left: {
      val: 5,
      left: { val: 6, left: null, right: null },
      right: {
        val: 2,
        left: { val: 7, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
    },
    right: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 8, left: null, right: null },
    },
  }

  console.log('二叉树: [3,5,1,6,2,0,8,null,null,7,4]')
  console.log('p = 5, q = 1 的最近公共祖先是 3')
  console.log('p = 5, q = 4 的最近公共祖先是 5')

  return { lca1: 3, lca2: 5 }
}
