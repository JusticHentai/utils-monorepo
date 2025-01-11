class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null
  }

  let pA: ListNode | null = headA,
    pB: ListNode | null = headB

  while (pA !== pB) {
    pA = pA ? pA.next : headB
    pB = pB ? pB.next : headA
  }

  return pA
}
