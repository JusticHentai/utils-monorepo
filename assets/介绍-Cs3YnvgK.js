import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`class ListNode {
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
`,i=`import isPalindrome from '../../../../packages/learn-utils/src/leetcode/isPalindrome'

export default () => {
  // 创建回文链表: 1 -> 2 -> 2 -> 1
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: { val: 1, next: null },
      },
    },
  }

  const result = isPalindrome(head as any)

  console.log('链表: 1 -> 2 -> 2 -> 1')
  console.log('是否为回文链表:', result)

  return result
}
`;function t(l){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"回文链表-leetcode-234",children:"回文链表 (LeetCode 234)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个单链表的头节点 ",n.jsx(e.code,{children:"head"}),"，请你判断该链表是否为回文链表。如果是，返回 ",n.jsx(e.code,{children:"true"}),"；否则，返回 ",n.jsx(e.code,{children:"false"}),"。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"快慢指针 + 反转链表"}),"："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用快慢指针找到链表中点"}),`
`,n.jsx(e.li,{children:"反转后半部分链表"}),`
`,n.jsx(e.li,{children:"比较前半部分和反转后的后半部分"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"快指针每次走 2 步，慢指针每次走 1 步，找到中点"}),`
`,n.jsx(e.li,{children:"将链表从中点断开"}),`
`,n.jsx(e.li,{children:"反转后半部分链表"}),`
`,n.jsx(e.li,{children:"逐一比较两个链表的节点值"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:i})]})}function j(l={}){const{wrapper:e}={...r(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(t,{...l})}):t(l)}export{j as default};
