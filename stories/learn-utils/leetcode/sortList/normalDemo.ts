import sortList from '@jqxon/learn-utils/leetcode/sortList'

export default () => {
  // 创建链表: 4 -> 2 -> 1 -> 3
  const head = {
    val: 4,
    next: {
      val: 2,
      next: {
        val: 1,
        next: { val: 3, next: null },
      },
    },
  }

  const result = sortList(head as any)

  // 转换为数组显示
  const arr: number[] = []
  let current: any = result
  while (current) {
    arr.push(current.val)
    current = current.next
  }

  console.log('原链表: 4 -> 2 -> 1 -> 3')
  console.log('排序后:', arr)

  return arr
}
