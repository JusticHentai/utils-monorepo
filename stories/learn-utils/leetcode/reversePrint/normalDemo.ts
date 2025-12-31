import reversePrint from '@jqxon/learn-utils/leetcode/reversePrint'

export default () => {
  // 创建链表: 1 -> 3 -> 2
  const head = {
    val: 1,
    next: {
      val: 3,
      next: { val: 2, next: null },
    },
  }

  const result = reversePrint(head as any)

  console.log('链表: 1 -> 3 -> 2')
  console.log('从尾到头打印:', result)

  return result
}
