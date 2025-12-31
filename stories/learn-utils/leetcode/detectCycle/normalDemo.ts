import detectCycle from '@jqxon/learn-utils/leetcode/detectCycle'

export default () => {
  // 创建带环的链表: 3 -> 2 -> 0 -> -4 -> 2 (环)
  const node2 = { val: 2, next: null as any }
  const node0 = { val: 0, next: null as any }
  const node4 = { val: -4, next: null as any }
  const head = { val: 3, next: node2 }

  node2.next = node0
  node0.next = node4
  node4.next = node2 // 形成环

  const result = detectCycle(head)

  console.log('链表有环，环的入口节点值:', result?.val)

  return result?.val
}
