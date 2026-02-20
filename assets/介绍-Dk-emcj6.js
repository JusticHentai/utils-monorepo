import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import addTwoNumbers, { ListNode } from '../../../../packages/learn-utils/src/leetcode/addTwoNumbers'

const arrayToList = (arr: number[]): ListNode | null => {
  if (!arr.length) return null
  const head = new ListNode(arr[0])
  let curr = head
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i])
    curr = curr.next
  }
  return head
}

const listToArray = (head: ListNode | null): number[] => {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const normalDemo = () => {
  // 342 + 465 = 807
  const l1 = arrayToList([2, 4, 3])
  const l2 = arrayToList([5, 6, 4])
  const result = addTwoNumbers(l1, l2)

  return {
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    output: listToArray(result), // [7, 0, 8]
    explanation: '342 + 465 = 807，逆序存储为 [7, 0, 8]',
  }
}

export default normalDemo
`,i=`export class ListNode {
  val: number
  next!: ListNode | null
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

/**
 * 两数相加
 */
export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
) {
  let head = null,
    tail = null

  // 进位
  let carry = 0

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0

    const sum = n1 + n2 + carry

    if (!head) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      // @ts-ignore any
      tail = tail.next
    }

    carry = Math.floor(sum / 10)

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry)
  }

  return head
}
`;function t(r){const e={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"addtwonumbers-两数相加",children:"addTwoNumbers 两数相加"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/add-two-numbers/",rel:"nofollow",children:"LeetCode 2. 两数相加"})," 是链表操作的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，将两个数相加，并以相同形式返回一个表示和的链表。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"模拟加法"}),"：从低位到高位逐位相加"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"进位处理"}),"：使用 carry 记录进位"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"链表构建"}),"：边计算边构建结果链表"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(l,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(max(m, n))"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(max(m, n))"]}),`
`]}),`
`,n.jsx(e.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"处理两链表长度不同的情况"}),`
`,n.jsx(e.li,{children:"最后可能还有进位需要处理"}),`
`]})]})}function m(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{m as default};
