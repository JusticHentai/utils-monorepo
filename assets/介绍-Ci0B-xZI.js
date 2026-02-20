import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`class ListNode {
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
`,i=`import getIntersectionNode from '../../../../packages/learn-utils/src/leetcode/getIntersectionNode'

export default () => {
  // 创建相交链表
  const common = { val: 8, next: { val: 4, next: { val: 5, next: null } } }
  const headA = { val: 4, next: { val: 1, next: common } }
  const headB = { val: 5, next: { val: 6, next: { val: 1, next: common } } }

  const result = getIntersectionNode(headA as any, headB as any)

  console.log('链表A: 4 -> 1 -> 8 -> 4 -> 5')
  console.log('链表B: 5 -> 6 -> 1 -> 8 -> 4 -> 5')
  console.log('相交节点值:', result?.val)

  return result?.val
}
`;function s(l){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"相交链表-leetcode-160",children:"相交链表 (LeetCode 160)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你两个单链表的头节点 ",n.jsx(e.code,{children:"headA"})," 和 ",n.jsx(e.code,{children:"headB"}),"，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 ",n.jsx(e.code,{children:"null"}),"。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"双指针"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"两个指针分别从两个链表头部出发"}),`
`,n.jsx(e.li,{children:"当一个指针到达末尾时，跳转到另一个链表头部"}),`
`,n.jsx(e.li,{children:"两指针相遇时即为相交节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"指针 pA 从 headA 出发，指针 pB 从 headB 出发"}),`
`,n.jsx(e.li,{children:"pA 到达末尾后跳转到 headB，pB 到达末尾后跳转到 headA"}),`
`,n.jsx(e.li,{children:"两指针相遇时即为相交节点（或同时为 null 表示不相交）"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m + n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:i})]})}function p(l={}){const{wrapper:e}={...o(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(s,{...l})}):s(l)}export{p as default};
