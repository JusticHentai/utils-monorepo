class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export default function maxDepth(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null): number => {
    if (root === null) return 0

    const leftMaxDepth = dfs(root.left)
    const rightMaxDepth = dfs(root.right)

    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
  }

  return dfs(root)
}
