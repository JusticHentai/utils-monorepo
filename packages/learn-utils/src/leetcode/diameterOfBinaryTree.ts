function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0
    }

    const leftLength = dfs(node.left)

    const rightLength = dfs(node.right)

    res = Math.max(res, leftLength + rightLength)

    // 确定最小 然后给上一层
    return Math.max(leftLength, rightLength) + 1
  }

  dfs(root)

  return res
}
