// mergeTrees 需要 TreeNode 类型，这里展示算法思路
export default () => {
  // 合并两棵二叉树
  const tree1 = {
    val: 1,
    left: { val: 3, left: { val: 5, left: null, right: null }, right: null },
    right: { val: 2, left: null, right: null },
  }

  const tree2 = {
    val: 2,
    left: { val: 1, left: null, right: { val: 4, left: null, right: null } },
    right: { val: 3, left: null, right: { val: 7, left: null, right: null } },
  }

  console.log('树1:', tree1)
  console.log('树2:', tree2)
  console.log('合并后: 节点值相加')

  return { tree1, tree2 }
}
