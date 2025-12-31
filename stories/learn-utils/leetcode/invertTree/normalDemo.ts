// 二叉树翻转演示
const normalDemo = () => {
  return {
    input: '[4,2,7,1,3,6,9]',
    output: '[4,7,2,9,6,3,1]',
    explanation: '交换每个节点的左右子树',
    visualBefore: `
        4
       / \\
      2   7
     / \\ / \\
    1  3 6  9
    `,
    visualAfter: `
        4
       / \\
      7   2
     / \\ / \\
    9  6 3  1
    `,
  }
}

export default normalDemo
