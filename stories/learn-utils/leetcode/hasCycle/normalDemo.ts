// 由于链表环无法直接序列化展示，这里模拟测试
const normalDemo = () => {
  // 模拟快慢指针检测环
  const description = `
    快慢指针法：
    - slow 每次走 1 步
    - fast 每次走 2 步
    - 如果有环，fast 最终会追上 slow
    - 如果无环，fast 会先到达 null
  `

  return {
    algorithm: '快慢指针（Floyd 判圈算法）',
    description,
    example1: {
      input: '[3,2,0,-4], pos=1',
      output: true,
      explanation: '链表中有一个环，尾部连接到索引 1',
    },
    example2: {
      input: '[1,2], pos=0',
      output: true,
      explanation: '链表中有一个环，尾部连接到索引 0',
    },
    example3: {
      input: '[1], pos=-1',
      output: false,
      explanation: '链表中没有环',
    },
  }
}

export default normalDemo
