class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function mergeKLists(
  lists: Array<ListNode | null>
): ListNode | null {
  if (!lists.length) return null

  // @ts-ignore any
  return mergeList(lists, 0, lists.length - 1)
}

function mergeList(
  lists: Array<ListNode>,
  start: number,
  end: number
): ListNode {
  if (start === end) {
    return lists[start]
  }

  const mid = start + ((end - start) >> 1)
  const leftList = mergeList(lists, start, mid)
  const rightList = mergeList(lists, mid + 1, end)

  return merge(leftList, rightList)
}

function merge(head1: ListNode, head2: ListNode): ListNode {
  const newHead = new ListNode(0)
  let p = newHead

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      p.next = head1
      // @ts-ignore any
      head1 = head1.next
    } else {
      p.next = head2
      // @ts-ignore any
      head2 = head2.next
    }

    p = p.next
  }

  p.next = head1 ? head1 : head2

  // @ts-ignore any
  return newHead.next
}
