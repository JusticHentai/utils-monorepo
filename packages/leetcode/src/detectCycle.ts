class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  let slow = head,
    fast = head

  while (fast !== null) {
    slow = slow.next

    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null
    }

    if (fast === slow) {
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.next
      }

      return ptr
    }
  }

  return null
}
