import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import rob from '../../../../packages/learn-utils/src/leetcode/rob'

const normalDemo = () => {
  const testCases = [
    { nums: [1, 2, 3, 1], expected: 4 },
    { nums: [2, 7, 9, 3, 1], expected: 12 },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: rob(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      case1: '偷窃 1 号房屋和 3 号房屋，金额 = 1 + 3 = 4',
      case2: '偷窃 1、3、5 号房屋，金额 = 2 + 9 + 1 = 12',
    },
  }
}

export default normalDemo
`,i=`export default function rob(nums: number[]): number {
  const length = nums.length

  if (!length) {
    return 0
  }

  const dp = new Array(length)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])

  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[length - 1]
}
`;function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"rob-打家劫舍",children:"rob 打家劫舍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/house-robber/",rel:"nofollow",children:"LeetCode 198. 打家劫舍"})," 是动态规划的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"动态规划",children:"动态规划"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态定义"}),"：",n.jsx(e.code,{children:"dp[i]"})," 表示偷到第 i 间房的最大金额"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态转移"}),"：",n.jsx(e.code,{children:"dp[i] = max(dp[i-1], dp[i-2] + nums[i])"})]}),`
`,n.jsx(e.li,{children:"选择偷或不偷当前房屋"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，可优化为 O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/house-robber-ii/",rel:"nofollow",children:"打家劫舍 II"}),"（环形）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/house-robber-iii/",rel:"nofollow",children:"打家劫舍 III"}),"（树形）"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{u as default};
