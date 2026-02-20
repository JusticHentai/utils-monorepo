import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export class ListNode {
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
`,o=`import reversePrint from '../../../../packages/learn-utils/src/leetcode/reversePrint'

export default () => {
  // 创建链表: 1 -> 3 -> 2
  const head = {
    val: 1,
    next: {
      val: 3,
      next: { val: 2, next: null },
    },
  }

  const result = reversePrint(head as any)

  console.log('链表: 1 -> 3 -> 2')
  console.log('从尾到头打印:', result)

  return result
}
`;function s(r){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"从尾到头打印链表-剑指-offer-06",children:"从尾到头打印链表 (剑指 Offer 06)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"递归"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"利用递归的回溯特性"}),`
`,n.jsx(e.li,{children:"先递归到链表末尾，再依次将值加入结果数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"如果当前节点为空，返回空数组"}),`
`,n.jsx(e.li,{children:"递归处理下一个节点"}),`
`,n.jsx(e.li,{children:"将当前节点值追加到递归结果后面"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，递归栈空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:o})]})}function j(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
