import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  const dummy = new ListNode(0, head)

  let first = head
  let second = dummy

  for (let i = 0; i < n; i++) {
    // @ts-ignore any
    first = first.next
  }

  while (first !== null) {
    first = first.next

    // @ts-ignore any
    second = second.next
  }

  // @ts-ignore any
  second.next = second.next.next

  return dummy.next
}
`,o=`import removeNthFromEnd from '../../../../packages/learn-utils/src/leetcode/removeNthFromEnd'

export default () => {
  // 创建链表: 1 -> 2 -> 3 -> 4 -> 5
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: { val: 5, next: null },
        },
      },
    },
  }

  const result = removeNthFromEnd(head as any, 2)

  // 转换为数组显示
  const arr: number[] = []
  let current: any = result
  while (current) {
    arr.push(current.val)
    current = current.next
  }

  console.log('原链表: 1 -> 2 -> 3 -> 4 -> 5')
  console.log('删除倒数第 2 个节点后:', arr)

  return arr
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"删除链表的倒数第-n-个结点-leetcode-19",children:"删除链表的倒数第 N 个结点 (LeetCode 19)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个链表，删除链表的倒数第 ",n.jsx(e.code,{children:"n"})," 个结点，并且返回链表的头结点。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"双指针"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"快指针先走 n 步"}),`
`,n.jsx(e.li,{children:"然后快慢指针同时走"}),`
`,n.jsx(e.li,{children:"快指针到达末尾时，慢指针指向要删除节点的前一个"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"创建哑节点，指向头节点"}),`
`,n.jsx(e.li,{children:"快指针先走 n 步"}),`
`,n.jsx(e.li,{children:"快慢指针同时走，直到快指针到达末尾"}),`
`,n.jsx(e.li,{children:"删除慢指针的下一个节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:o})]})}function m(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
