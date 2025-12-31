// inorderTraversal 未导出，这里展示算法思路
export default () => {
  // 构建二叉树:
  //     1
  //      \
  //       2
  //      /
  //     3
  const root = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: null,
    },
  }

  // 中序遍历: 左 -> 根 -> 右
  const res: number[] = []
  const inorder = (node: any) => {
    if (!node) return
    inorder(node.left)
    res.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  console.log('中序遍历结果:', res)

  return res
}
