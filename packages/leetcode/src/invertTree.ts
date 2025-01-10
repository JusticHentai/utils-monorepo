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

export default function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root
  }

  invertTree(root.left)
  invertTree(root.right)

  const temp = root.left
  root.left = root.right
  root.right = temp

  return root
}
