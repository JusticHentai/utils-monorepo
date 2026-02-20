import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`class ListNode {
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
`,i=`import sortList from '../../../../packages/learn-utils/src/leetcode/sortList'

export default () => {
  // 创建链表: 4 -> 2 -> 1 -> 3
  const head = {
    val: 4,
    next: {
      val: 2,
      next: {
        val: 1,
        next: { val: 3, next: null },
      },
    },
  }

  const result = sortList(head as any)

  // 转换为数组显示
  const arr: number[] = []
  let current: any = result
  while (current) {
    arr.push(current.val)
    current = current.next
  }

  console.log('原链表: 4 -> 2 -> 1 -> 3')
  console.log('排序后:', arr)

  return arr
}
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"排序链表-leetcode-148",children:"排序链表 (LeetCode 148)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你链表的头结点 ",n.jsx(e.code,{children:"head"}),"，请将其按升序排列并返回排序后的链表。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"归并排序"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用快慢指针找到链表中点"}),`
`,n.jsx(e.li,{children:"递归排序左右两半"}),`
`,n.jsx(e.li,{children:"合并两个有序链表"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用快慢指针找到链表中点"}),`
`,n.jsx(e.li,{children:"断开链表，递归排序左右两半"}),`
`,n.jsx(e.li,{children:"合并两个有序链表"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(log n)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:i})]})}function j(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{j as default};
