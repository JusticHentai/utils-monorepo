class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function hasCycle(head: ListNode | null): boolean {
  let fast = head
  let slow = head

  while (fast) {
    if (fast.next === null) {
      return false
    }

    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}
