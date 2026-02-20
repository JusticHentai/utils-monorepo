import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`// 合并两个有序链表演示
const normalDemo = () => {
  return {
    l1: [1, 2, 4],
    l2: [1, 3, 4],
    output: [1, 1, 2, 3, 4, 4],
    explanation: '按顺序合并两个有序链表',
  }
}

export default normalDemo
`,o=`class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const newHead = new ListNode(0)
  let p = newHead

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      p.next = list1
      // @ts-ignore any
      list1 = list1.next
    } else {
      p.next = list2
      // @ts-ignore any
      list2 = list2.next
    }

    p = p.next
  }

  p.next = list1 ? list1 : list2

  // @ts-ignore any
  return newHead.next
}
`;function s(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"mergetwolists-合并两个有序链表",children:"mergeTwoLists 合并两个有序链表"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/merge-two-sorted-lists/",rel:"nofollow",children:"LeetCode 21. 合并两个有序链表"})," 是链表的基础题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"将两个升序链表合并为一个新的升序链表并返回。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"迭代法",children:"迭代法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"创建哑节点作为新链表头"}),`
`,n.jsx(e.li,{children:"比较两链表当前节点，较小的接入新链表"}),`
`,n.jsx(e.li,{children:"处理剩余节点"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(l,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m + n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/merge-k-sorted-lists/",rel:"nofollow",children:"合并K个升序链表"})}),`
`]})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
