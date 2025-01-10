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

export default function rob(root: TreeNode | null): number {
  const dp = new Map()

  const dfs = (root: TreeNode | null): [number, number] => {
    if (!root) {
      return [0, 0]
    }

    const left = dfs(root.left)
    const right = dfs(root.right)

    const robExcludeRoot =
      Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const robIncludeRoot = root.val + left[0] + right[0]

    return [robExcludeRoot, robIncludeRoot]
  }

  const res = dfs(root)

  return Math.max(res[0], res[1])
}
