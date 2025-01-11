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

export default function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (inorder.length === 0) return null

  const root = new TreeNode(preorder[0])
  const mid = inorder.indexOf(preorder[0])

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}

export function buildTree2(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const dfs = (
    p_start: number,
    p_end: number,
    i_start: number,
    i_end: number
  ) => {
    if (p_start > p_end) return null

    const rootValue = preorder[p_start]
    const root = new TreeNode(rootValue)

    const mid = inorder.indexOf(rootValue)

    // 从 inorder 获取 下一级左边数量
    const leftNumber = mid - i_start

    root.left = dfs(p_start + 1, p_start + leftNumber, i_start, mid - 1)
    root.right = dfs(p_start + leftNumber + 1, p_end, mid + 1, i_end)

    return root
  }

  return dfs(0, preorder.length - 1, 0, inorder.length - 1)
}
