import mergeKLists from '../../../../packages/learn-utils/src/leetcode/mergeKLists'

export default () => {
  // 创建多个有序链表
  const list1 = { val: 1, next: { val: 4, next: { val: 5, next: null } } }
  const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } }
  const list3 = { val: 2, next: { val: 6, next: null } }

  const result = mergeKLists([list1, list2, list3] as any)

  // 转换为数组显示
  const arr: number[] = []
  let current: any = result
  while (current) {
    arr.push(current.val)
    current = current.next
  }

  console.log('输入链表: [[1,4,5],[1,3,4],[2,6]]')
  console.log('合并后:', arr)

  return arr
}
