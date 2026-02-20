import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function lengthOfLIS(nums: number[]): number {
  const n = nums.length

  const dp = new Array(n).fill(1)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // 获取 一群 j 中 最大的那个
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}
`,c=`import lengthOfLIS from '../../../../packages/learn-utils/src/leetcode/lengthOfLIS'

export default () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18]

  const result = lengthOfLIS(nums)

  console.log('输入数组:', nums)
  console.log('最长递增子序列长度:', result)
  console.log('例如: [2, 3, 7, 101]')

  return result
}
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最长递增子序列-leetcode-300",children:"最长递增子序列 (LeetCode 300)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个整数数组 ",n.jsx(e.code,{children:"nums"}),"，找到其中最长严格递增子序列的长度。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dp[i]"})," 表示以 ",n.jsx(e.code,{children:"nums[i]"})," 结尾的最长递增子序列长度"]}),`
`,n.jsxs(e.li,{children:["对于每个 ",n.jsx(e.code,{children:"i"}),"，遍历所有 ",n.jsx(e.code,{children:"j < i"}),"，如果 ",n.jsx(e.code,{children:"nums[j] < nums[i]"}),"，则 ",n.jsx(e.code,{children:"dp[i] = max(dp[i], dp[j] + 1)"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["初始化 ",n.jsx(e.code,{children:"dp"})," 数组，每个元素为 1"]}),`
`,n.jsxs(e.li,{children:["对于每个位置 ",n.jsx(e.code,{children:"i"}),"，遍历所有 ",n.jsx(e.code,{children:"j < i"})]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"nums[j] < nums[i]"}),"，更新 ",n.jsx(e.code,{children:"dp[i] = max(dp[i], dp[j] + 1)"})]}),`
`,n.jsxs(e.li,{children:["返回 ",n.jsx(e.code,{children:"dp"})," 数组的最大值"]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n²)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:c})]})}function m(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{m as default};
