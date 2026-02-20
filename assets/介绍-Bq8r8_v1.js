import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`export default function findDuplicate(nums: number[]): number {
  let slow = 0,
    fast = 0

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  fast = 0

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}
`,t=`import findDuplicate from '../../../../packages/learn-utils/src/leetcode/findDuplicate'

export default () => {
  const nums = [1, 3, 4, 2, 2]

  const result = findDuplicate(nums)

  console.log('输入数组:', nums)
  console.log('重复的数字:', result)

  return result
}
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"寻找重复数-leetcode-287",children:"寻找重复数 (LeetCode 287)"}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(s.p,{children:["给定一个包含 ",n.jsx(s.code,{children:"n + 1"})," 个整数的数组 ",n.jsx(s.code,{children:"nums"}),"，其数字都在 ",n.jsx(s.code,{children:"[1, n]"})," 范围内（包括 1 和 n），可知至少存在一个重复的整数。假设 ",n.jsx(s.code,{children:"nums"})," 只有一个重复的整数，返回这个重复的数。"]}),`
`,n.jsx(s.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"快慢指针（Floyd 判圈算法）"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["将数组看作链表，",n.jsx(s.code,{children:"nums[i]"})," 指向下一个节点"]}),`
`,n.jsx(s.li,{children:"由于有重复数字，必然存在环"}),`
`,n.jsx(s.li,{children:"使用快慢指针找到环的入口即为重复数字"}),`
`]}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"快指针每次走两步，慢指针每次走一步"}),`
`,n.jsx(s.li,{children:"第一次相遇后，将快指针重置到起点"}),`
`,n.jsx(s.li,{children:"两指针同速前进，再次相遇点即为重复数字"}),`
`]}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:t})]})}function m(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
