export class ListNode {
  val: number
  next!: ListNode | null
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

/**
 * 两数相加
 */
export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
) {
  let head = null,
    tail = null

  // 进位
  let carry = 0

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0

    const sum = n1 + n2 + carry

    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      // @ts-ignore any
      tail = tail.next
    }

    carry = Math.floor(sum / 10)

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry)
  }

  return head
}
