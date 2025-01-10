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

export default function isValidBST(root: TreeNode | null): boolean {
  const dfs = (
    root: TreeNode | null,
    lower: number,
    upper: number
  ): boolean => {
    if (root === null) {
      return true
    }

    if (root.val <= lower || root.val >= upper) {
      return false
    }

    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper)
  }

  return dfs(root, -Infinity, Infinity)
}
