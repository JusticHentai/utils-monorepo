import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`class ListNode {
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
`,r=`import detectCycle from '../../../../packages/learn-utils/src/leetcode/detectCycle'

export default () => {
  // 创建带环的链表: 3 -> 2 -> 0 -> -4 -> 2 (环)
  const node2 = { val: 2, next: null as any }
  const node0 = { val: 0, next: null as any }
  const node4 = { val: -4, next: null as any }
  const head = { val: 3, next: node2 }

  node2.next = node0
  node0.next = node4
  node4.next = node2 // 形成环

  const result = detectCycle(head)

  console.log('链表有环，环的入口节点值:', result?.val)

  return result?.val
}
`;function s(l){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"环形链表-ii-leetcode-142",children:"环形链表 II (LeetCode 142)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个链表的头节点 ",n.jsx(e.code,{children:"head"}),"，返回链表开始入环的第一个节点。如果链表无环，则返回 ",n.jsx(e.code,{children:"null"}),"。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"快慢指针（Floyd 判圈算法）"}),"："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"快指针每次走 2 步，慢指针每次走 1 步"}),`
`,n.jsx(e.li,{children:"如果有环，快慢指针必定相遇"}),`
`,n.jsx(e.li,{children:"相遇后，将一个指针移到头部，两指针同速前进，再次相遇点即为环入口"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用快慢指针检测是否有环"}),`
`,n.jsx(e.li,{children:"如果相遇，将一个指针重置到头部"}),`
`,n.jsx(e.li,{children:"两指针同时每次走一步，相遇点即为环入口"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:r})]})}function j(l={}){const{wrapper:e}={...o(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(s,{...l})}):s(l)}export{j as default};
