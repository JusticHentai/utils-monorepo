import buildTree from '@jqxon/learn-utils/leetcode/buildTree'

export default () => {
  const preorder = [3, 9, 20, 15, 7]
  const inorder = [9, 3, 15, 20, 7]

  const result = buildTree(preorder, inorder)

  console.log('前序遍历:', preorder)
  console.log('中序遍历:', inorder)
  console.log('构建的二叉树:', JSON.stringify(result, null, 2))

  return result
}
