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

export default function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []

  if (!root) return res

  const q = []
  q.push(root)

  while (q.length) {
    const currentLevelSize = q.length
    res.push([])

    for (let i = 0; i < currentLevelSize; i++) {
      const node = q.shift() as TreeNode

      res[res.length - 1].push(node.val)

      if (node.left) q.push(node.left)

      if (node.right) q.push(node.right)
    }
  }

  return res
}
