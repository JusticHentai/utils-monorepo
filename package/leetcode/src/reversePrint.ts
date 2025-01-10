export class ListNode {
  val: number
  next: ListNode | null
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

/**
 * 从尾到头打印链表
 */
export default function reversePrint(head: ListNode | null): number[] {
  return head === null ? [] : reversePrint(head.next).concat(head.val)
}
