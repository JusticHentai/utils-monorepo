import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`class ListNode {
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
`,d=`import mergeKLists from '../../../../packages/learn-utils/src/leetcode/mergeKLists'

export default () => {
  // 创建多个有序链表
  const list1 = { val: 1, next: { val: 4, next: { val: 5, next: null } } }
  const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } }
  const list3 = { val: 2, next: { val: 6, next: null } }

  const result = mergeKLists([list1, list2, list3] as any)

  // 转换为数组显示
  const arr: number[] = []
  let current: any = result
  while (current) {
    arr.push(current.val)
    current = current.next
  }

  console.log('输入链表: [[1,4,5],[1,3,4],[2,6]]')
  console.log('合并后:', arr)

  return arr
}
`;function r(t){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"合并k个升序链表-leetcode-23",children:"合并K个升序链表 (LeetCode 23)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"分治法"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将 k 个链表两两合并"}),`
`,n.jsx(e.li,{children:"递归地将问题规模减半"}),`
`,n.jsx(e.li,{children:"最终合并成一个链表"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用分治法，将链表数组分成两半"}),`
`,n.jsx(e.li,{children:"递归合并左半部分和右半部分"}),`
`,n.jsx(e.li,{children:"将两个合并后的链表再合并"}),`
`,n.jsx(e.li,{children:"基本情况：只有一个链表时直接返回"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n * log k)，n 为所有节点总数，k 为链表数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(log k)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:d})]})}function m(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{m as default};
