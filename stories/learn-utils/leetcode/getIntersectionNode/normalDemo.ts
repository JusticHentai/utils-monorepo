import getIntersectionNode from '../../../../packages/learn-utils/src/leetcode/getIntersectionNode'

export default () => {
  // 创建相交链表
  const common = { val: 8, next: { val: 4, next: { val: 5, next: null } } }
  const headA = { val: 4, next: { val: 1, next: common } }
  const headB = { val: 5, next: { val: 6, next: { val: 1, next: common } } }

  const result = getIntersectionNode(headA as any, headB as any)

  console.log('链表A: 4 -> 1 -> 8 -> 4 -> 5')
  console.log('链表B: 5 -> 6 -> 1 -> 8 -> 4 -> 5')
  console.log('相交节点值:', result?.val)

  return result?.val
}
