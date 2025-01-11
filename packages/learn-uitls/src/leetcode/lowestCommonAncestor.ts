export default function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return null
  }

  // dfs 深入 第一遍 先找到 q p
  if (root === q || root === p) {
    return root
  }

  // dfs 深入 有 q p 往上时 返回 q p
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // dfs 深入 有公共节点 返回当前节点 最后一路向上直通就是公共节点
  if (left && right) {
    return root
  }

  return left ? left : right
}
