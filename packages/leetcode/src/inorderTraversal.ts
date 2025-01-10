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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const inorder = (root: TreeNode | null) => {
    if (root === null) {
      return
    }

    // @ts-ignore any
    inorder(root.left)

    res.push(root.val)

    // @ts-ignore any
    inorder(root.right)
  }

  inorder(root)

  return res
}
