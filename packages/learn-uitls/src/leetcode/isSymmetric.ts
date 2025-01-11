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

export default function isSymmetric(root: TreeNode | null): boolean {
  const dfs = (
    rightRoot: TreeNode | null,
    leftRoot: TreeNode | null
  ): boolean => {
    if (!rightRoot && !leftRoot) {
      return true
    }

    if (!rightRoot || !leftRoot) {
      return false
    }

    return (
      rightRoot.val === leftRoot.val &&
      dfs(rightRoot.left, leftRoot.right) &&
      dfs(rightRoot.right, leftRoot.left)
    )
  }

  return dfs(root.right, root.left)
}
