import reverseList from '../../../../packages/learn-utils/src/leetcode/reverseList'

// 创建链表节点
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 辅助函数：数组转链表
const arrayToList = (arr: number[]): ListNode | null => {
  if (!arr.length) return null
  const head = new ListNode(arr[0])
  let curr = head
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i])
    curr = curr.next
  }
  return head
}

// 辅助函数：链表转数组
const listToArray = (head: ListNode | null): number[] => {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const normalDemo = () => {
  const input = [1, 2, 3, 4, 5]
  const head = arrayToList(input)
  const reversed = reverseList(head)
  const output = listToArray(reversed)

  return {
    input,
    output, // [5, 4, 3, 2, 1]
    explanation: '链表反转：1->2->3->4->5 变为 5->4->3->2->1',
  }
}

export default normalDemo
