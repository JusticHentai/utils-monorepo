class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(0, head)

  let first = head
  let second = dummy

  for (let i = 0; i < n; i++) {
    // @ts-ignore any
    first = first.next
  }

  while (first !== null) {
    first = first.next

    // @ts-ignore any
    second = second.next
  }

  // @ts-ignore any
  second.next = second.next.next

  return dummy.next
}
