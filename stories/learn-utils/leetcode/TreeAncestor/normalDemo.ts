import { TreeAncestor } from '@jqxon/learn-utils/leetcode/TreeAncestor'

export default () => {
  // 树结构: 0 是根节点，1 的父节点是 0，2 的父节点是 0，3 的父节点是 1...
  const n = 7
  const parent = [-1, 0, 0, 1, 1, 2, 2]

  const treeAncestor = new TreeAncestor(n, parent)

  const results = [
    { node: 3, k: 1, result: treeAncestor.getKthAncestor(3, 1) },
    { node: 5, k: 2, result: treeAncestor.getKthAncestor(5, 2) },
    { node: 6, k: 3, result: treeAncestor.getKthAncestor(6, 3) },
  ]

  console.log('树的父节点数组:', parent)
  results.forEach(({ node, k, result }) => {
    console.log(`节点 ${node} 的第 ${k} 个祖先:`, result)
  })

  return results
}
