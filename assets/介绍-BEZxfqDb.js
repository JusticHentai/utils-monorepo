import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`// 由于链表环无法直接序列化展示，这里模拟测试
const normalDemo = () => {
  // 模拟快慢指针检测环
  const description = \`
    快慢指针法：
    - slow 每次走 1 步
    - fast 每次走 2 步
    - 如果有环，fast 最终会追上 slow
    - 如果无环，fast 会先到达 null
  \`

  return {
    algorithm: '快慢指针（Floyd 判圈算法）',
    description,
    example1: {
      input: '[3,2,0,-4], pos=1',
      output: true,
      explanation: '链表中有一个环，尾部连接到索引 1',
    },
    example2: {
      input: '[1,2], pos=0',
      output: true,
      explanation: '链表中有一个环，尾部连接到索引 0',
    },
    example3: {
      input: '[1], pos=-1',
      output: false,
      explanation: '链表中没有环',
    },
  }
}

export default normalDemo
`,r=`class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function hasCycle(head: ListNode | null): boolean {
  let fast = head
  let slow = head

  while (fast) {
    if (fast.next === null) {
      return false
    }

    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}
`;function t(l){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"hascycle-环形链表",children:"hasCycle 环形链表"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/linked-list-cycle/",rel:"nofollow",children:"LeetCode 141. 环形链表"})," 是链表的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个链表的头节点 head，判断链表中是否有环。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"快慢指针floyd-判圈算法",children:"快慢指针（Floyd 判圈算法）"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"慢指针"}),"：每次移动一步"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"快指针"}),"：每次移动两步"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"相遇判断"}),"：如果有环，快指针最终会追上慢指针"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"为什么快慢指针能检测环",children:"为什么快慢指针能检测环？"}),`
`,n.jsx(e.p,{children:"如果存在环，快指针会在环中不断循环，慢指针进入环后，快指针每次比慢指针多走一步，最终会追上慢指针。"}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/linked-list-cycle-ii/",rel:"nofollow",children:"环形链表 II"}),"（找入环点）"]}),`
`]})]})}function p(l={}){const{wrapper:e}={...o(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(t,{...l})}):t(l)}export{p as default};
