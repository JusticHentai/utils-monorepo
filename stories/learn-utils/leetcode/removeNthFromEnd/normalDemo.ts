import removeNthFromEnd from '@jqxon/learn-utils/leetcode/removeNthFromEnd'

export default () => {
  // 创建链表: 1 -> 2 -> 3 -> 4 -> 5
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: { val: 5, next: null },
        },
      },
    },
  }

  const result = removeNthFromEnd(head as any, 2)

  // 转换为数组显示
  const arr: number[] = []
  let current: any = result
  while (current) {
    arr.push(current.val)
    current = current.next
  }

  console.log('原链表: 1 -> 2 -> 3 -> 4 -> 5')
  console.log('删除倒数第 2 个节点后:', arr)

  return arr
}
