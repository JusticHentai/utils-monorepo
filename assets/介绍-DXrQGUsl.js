import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`/**
 * 数组中重复的数字
 * https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/?favorite=xb9nqhhg
 */
export default function findRepeatNumber(nums: number[]): number | null {
  const hashMap: Record<string, boolean> = {}

  for (const item of nums) {
    if (hashMap[item]) {
      return item
    }

    hashMap[item] = true
  }

  return null
}
`,o=`import findRepeatNumber from '../../../../packages/learn-utils/src/leetcode/findRepeatNumber'

export default () => {
  const nums = [2, 3, 1, 0, 2, 5, 3]

  const result = findRepeatNumber(nums)

  console.log('输入数组:', nums)
  console.log('重复的数字:', result)

  return result
}
`;function i(r){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"数组中重复的数字-剑指-offer-03",children:"数组中重复的数字 (剑指 Offer 03)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"找出数组中重复的数字。在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"哈希表"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用哈希表记录出现过的数字"}),`
`,n.jsx(e.li,{children:"遍历数组，如果数字已存在于哈希表，则为重复数字"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"创建哈希表"}),`
`,n.jsx(e.li,{children:"遍历数组"}),`
`,n.jsx(e.li,{children:"如果当前数字在哈希表中，返回该数字"}),`
`,n.jsx(e.li,{children:"否则将数字加入哈希表"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:o})]})}function j(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
