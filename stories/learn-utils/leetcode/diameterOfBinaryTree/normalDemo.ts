// diameterOfBinaryTree 未导出，这里展示算法思路
export default () => {
  // 构建二叉树:
  //       1
  //      / \
  //     2   3
  //    / \
  //   4   5
  // 直径为 3 (路径 4->2->1->3 或 5->2->1->3)

  const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
  }

  // 计算直径的 DFS 实现
  let res = 0
  const dfs = (node: any): number => {
    if (!node) return 0
    const leftLength = dfs(node.left)
    const rightLength = dfs(node.right)
    res = Math.max(res, leftLength + rightLength)
    return Math.max(leftLength, rightLength) + 1
  }

  dfs(tree)
  console.log('二叉树直径:', res)

  return res
}
