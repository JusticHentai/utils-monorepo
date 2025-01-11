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

export default function flatten(root: TreeNode | null): void {
  let current = root

  while (current !== null) {
    if (current.left !== null) {
      const next = current.left

      let predecessor = next

      while (predecessor.right !== null) {
        predecessor = predecessor.right
      }

      predecessor.right = current.right

      current.left = null

      current.right = next
    }

    current = current.right
  }
}
