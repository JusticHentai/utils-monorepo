class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let slow: ListNode | null = head,
    fast: ListNode | null = head

  // 断开两片联系用的
  let preSlow = null

  while (fast && fast.next) {
    preSlow = slow
    // @ts-ignore any
    slow = slow.next
    fast = fast.next.next
  }

  // @ts-ignore any
  preSlow.next = null

  const l = sortList(head)
  const r = sortList(slow)

  return merge(l, r)
}

function merge(l: ListNode | null, r: ListNode | null): ListNode {
  const dummy = new ListNode(0)

  let prev = dummy

  while (l && r) {
    if (l.val < r.val) {
      prev.next = l
      l = l.next
    } else {
      prev.next = r
      r = r.next
    }

    prev = prev.next
  }

  // 最后一个
  if (l) prev.next = l
  if (r) prev.next = r

  return dummy.next as ListNode
}
