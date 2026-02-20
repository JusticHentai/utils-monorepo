import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import uniquePaths from '../../../../packages/learn-utils/src/leetcode/uniquePaths'

const normalDemo = () => {
  const testCases = [
    { m: 3, n: 7, expected: 28 },
    { m: 3, n: 2, expected: 3 },
    { m: 7, n: 3, expected: 28 },
  ]

  const results = testCases.map(({ m, n, expected }) => ({
    m,
    n,
    output: uniquePaths(m, n),
    expected,
  }))

  return {
    testCases: results,
    explanation: '从左上角到右下角的不同路径数',
  }
}

export default normalDemo
`,o=`export default function uniquePaths(m: number, n: number): number {
  const dp = Array.from(new Array(m), () => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
`;function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"uniquepaths-不同路径",children:"uniquePaths 不同路径"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/unique-paths/",rel:"nofollow",children:"LeetCode 62. 不同路径"})," 是动态规划的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"一个机器人位于一个 m x n 网格的左上角，机器人每次只能向下或者向右移动一步。问总共有多少条不同的路径？"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"动态规划",children:"动态规划"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态定义"}),"：",n.jsx(e.code,{children:"dp[i][j]"})," 表示到达 (i,j) 的路径数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态转移"}),"：",n.jsx(e.code,{children:"dp[i][j] = dp[i-1][j] + dp[i][j-1]"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"边界条件"}),"：第一行和第一列都是 1"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m × n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(m × n)，可优化为 O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/unique-paths-ii/",rel:"nofollow",children:"不同路径 II"}),"（有障碍物）"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{u as default};
