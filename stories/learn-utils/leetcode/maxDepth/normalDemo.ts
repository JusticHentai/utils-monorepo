// 二叉树最大深度演示
const normalDemo = () => {
  return {
    input: '[3,9,20,null,null,15,7]',
    output: 3,
    explanation: '最大深度为 3（根节点到叶子节点的最长路径）',
    visual: `
        3        <- 深度 1
       / \\
      9  20      <- 深度 2
        /  \\
       15   7    <- 深度 3
    `,
  }
}

export default normalDemo
