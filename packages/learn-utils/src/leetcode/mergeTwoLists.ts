class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const newHead = new ListNode(0)
  let p = newHead

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      p.next = list1
      // @ts-ignore any
      list1 = list1.next
    } else {
      p.next = list2
      // @ts-ignore any
      list2 = list2.next
    }

    p = p.next
  }

  p.next = list1 ? list1 : list2

  // @ts-ignore any
  return newHead.next
}
