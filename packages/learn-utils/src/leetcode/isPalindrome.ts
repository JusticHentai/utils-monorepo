class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true
  }

  let fast = head
  let slow = head

  let prev

  // 跑到尽头
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  // 断两半
  prev.next = null

  // 翻转
  let head2 = null

  while (slow) {
    const temp = slow.next
    slow.next = head2
    head2 = slow
    slow = temp
  }

  while (head && head2) {
    if (head.val !== head2.val) {
      return false
    }

    head = head.next
    head2 = head2.next
  }

  return true
}
