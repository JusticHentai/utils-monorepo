// 层序遍历演示
const normalDemo = () => {
  return {
    input: '[3,9,20,null,null,15,7]',
    output: [[3], [9, 20], [15, 7]],
    explanation: '按层级从上到下、从左到右遍历',
    visual: `
        3
       / \\
      9  20
        /  \\
       15   7
    `,
  }
}

export default normalDemo
