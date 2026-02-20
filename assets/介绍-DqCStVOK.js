import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function minPathSum(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  const dp = Array.from(new Array(m), () => new Array(n).fill(0))

  dp[0][0] = grid[0][0]

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[m - 1][n - 1]
}
`,o=`import minPathSum from '../../../../packages/learn-utils/src/leetcode/minPathSum'

export default () => {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]

  const result = minPathSum(grid)

  console.log('网格:', grid)
  console.log('最小路径和:', result)
  console.log('路径: 1→3→1→1→1')

  return result
}
`;function d(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"最小路径和-leetcode-64",children:"最小路径和 (LeetCode 64)"}),`
`,n.jsx(i.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(i.p,{children:["给定一个包含非负整数的 ",n.jsx(i.code,{children:"m x n"})," 网格 ",n.jsx(i.code,{children:"grid"}),"，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。每次只能向下或者向右移动一步。"]}),`
`,n.jsx(i.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"dp[i][j]"})," 表示从 (0,0) 到 (i,j) 的最小路径和"]}),`
`,n.jsxs(i.li,{children:["状态转移：",n.jsx(i.code,{children:"dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]"})]}),`
`]}),`
`,n.jsx(i.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsx(i.li,{children:"初始化第一行和第一列"}),`
`,n.jsx(i.li,{children:"遍历网格，计算每个位置的最小路径和"}),`
`,n.jsxs(i.li,{children:["返回 ",n.jsx(i.code,{children:"dp[m-1][n-1]"})]}),`
`]}),`
`,n.jsx(i.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"时间复杂度"}),"：O(m * n)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"空间复杂度"}),"：O(m * n)"]}),`
`]}),`
`,n.jsx(i.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(i.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:o})]})}function p(e={}){const{wrapper:i}={...s(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(d,{...e})}):d(e)}export{p as default};
