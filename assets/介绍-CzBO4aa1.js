import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import reverseList from '../../../../packages/learn-utils/src/leetcode/reverseList'

// 创建链表节点
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 辅助函数：数组转链表
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

// 辅助函数：链表转数组
const listToArray = (head: ListNode | null): number[] => {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const normalDemo = () => {
  const input = [1, 2, 3, 4, 5]
  const head = arrayToList(input)
  const reversed = reverseList(head)
  const output = listToArray(reversed)

  return {
    input,
    output, // [5, 4, 3, 2, 1]
    explanation: '链表反转：1->2->3->4->5 变为 5->4->3->2->1',
  }
}

export default normalDemo
`,d=`class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head

  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
`;function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"reverselist-反转链表",children:"reverseList 反转链表"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/reverse-linked-list/",rel:"nofollow",children:"LeetCode 206. 反转链表"})," 是链表操作的基础题，面试必考。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你单链表的头节点 ",n.jsx(e.code,{children:"head"}),"，请你反转链表，并返回反转后的链表。"]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"迭代法",children:"迭代法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["使用三个指针：",n.jsx(e.code,{children:"prev"}),"（前一个节点）、",n.jsx(e.code,{children:"curr"}),"（当前节点）、",n.jsx(e.code,{children:"next"}),"（下一个节点）"]}),`
`,n.jsxs(e.li,{children:["遍历链表，依次改变每个节点的 ",n.jsx(e.code,{children:"next"})," 指向"]}),`
`,n.jsxs(e.li,{children:["最后返回 ",n.jsx(e.code,{children:"prev"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"递归法",children:"递归法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"递归到链表末尾"}),`
`,n.jsx(e.li,{children:"回溯时改变指针方向"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(l,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"head",children:"head"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"ListNode | null"})]}),`
`,n.jsx(e.li,{children:"描述：链表头节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"ListNode | null"})]}),`
`,n.jsx(e.li,{children:"描述：反转后的链表头节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"时间复杂度"}),n.jsx("th",{children:"空间复杂度"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"迭代"}),n.jsx("td",{children:"O(n)"}),n.jsx("td",{children:"O(1)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"递归"}),n.jsx("td",{children:"O(n)"}),n.jsx("td",{children:"O(n)"})]})]})]}),`
`,n.jsx(e.h2,{id:"图解过程",children:"图解过程"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`原始: 1 -> 2 -> 3 -> 4 -> 5 -> null

步骤1: null <- 1    2 -> 3 -> 4 -> 5
步骤2: null <- 1 <- 2    3 -> 4 -> 5
步骤3: null <- 1 <- 2 <- 3    4 -> 5
步骤4: null <- 1 <- 2 <- 3 <- 4    5
步骤5: null <- 1 <- 2 <- 3 <- 4 <- 5

结果: 5 -> 4 -> 3 -> 2 -> 1 -> null
`})}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/reverse-linked-list-ii/",rel:"nofollow",children:"反转链表 II"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/reverse-nodes-in-k-group/",rel:"nofollow",children:"K 个一组翻转链表"})}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
