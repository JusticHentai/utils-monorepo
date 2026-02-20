import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import majorityElement from '../../../../packages/learn-utils/src/leetcode/majorityElement'

const normalDemo = () => {
  const testCases = [
    { nums: [3, 2, 3], expected: 3 },
    { nums: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: majorityElement(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: '出现次数超过 n/2 的元素',
  }
}

export default normalDemo
`,i=`export default function majorityElement(nums: number[]): number {
  const half = nums.length / 2

  const hash: Record<string, number> = {}

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1

    if (hash[num] > half) return num
  }
}
`;function r(s){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"majorityelement-多数元素",children:"majorityElement 多数元素"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/majority-element/",rel:"nofollow",children:"LeetCode 169. 多数元素"})," 是哈希表/摩尔投票的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个大小为 n 的数组 nums，返回其中的多数元素。多数元素是指在数组中出现次数大于 ⌊n/2⌋ 的元素。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"哈希表计数",children:"哈希表计数"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"统计每个元素出现次数"}),`
`,n.jsx(e.li,{children:"找到出现次数超过 n/2 的元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"其他解法",children:"其他解法"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"摩尔投票法"}),"：O(1) 空间"]})]})}function x(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
