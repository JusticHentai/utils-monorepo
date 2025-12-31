import addTwoNumbers, { ListNode } from '../../../../packages/learn-utils/src/leetcode/addTwoNumbers'

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

const listToArray = (head: ListNode | null): number[] => {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const normalDemo = () => {
  // 342 + 465 = 807
  const l1 = arrayToList([2, 4, 3])
  const l2 = arrayToList([5, 6, 4])
  const result = addTwoNumbers(l1, l2)

  return {
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    output: listToArray(result), // [7, 0, 8]
    explanation: '342 + 465 = 807，逆序存储为 [7, 0, 8]',
  }
}

export default normalDemo
