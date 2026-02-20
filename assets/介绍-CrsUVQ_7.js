import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`export default function maximalSquare(matrix: string[][]): number {
  if (!matrix.length) {
    return 0
  }

  const m = matrix.length
  const n = matrix[0].length

  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))

  let max = 0

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }

  return max * max
}
`,t=`import maximalSquare from '../../../../packages/learn-utils/src/leetcode/maximalSquare'

export default () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]

  const result = maximalSquare(matrix)

  console.log('矩阵:', matrix)
  console.log('最大正方形面积:', result)

  return result
}
`;function l(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最大正方形-leetcode-221",children:"最大正方形 (LeetCode 221)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["在一个由 ",n.jsx(e.code,{children:"'0'"})," 和 ",n.jsx(e.code,{children:"'1'"})," 组成的二维矩阵内，找到只包含 ",n.jsx(e.code,{children:"'1'"})," 的最大正方形，并返回其面积。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dp[i][j]"})," 表示以 ",n.jsx(e.code,{children:"(i, j)"})," 为右下角的最大正方形边长"]}),`
`,n.jsxs(e.li,{children:["状态转移：",n.jsx(e.code,{children:"dp[i][j] = min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"创建 dp 数组"}),`
`,n.jsx(e.li,{children:"遍历矩阵，如果当前位置是 '1'"}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"dp[i][j] = min(左上, 上, 左) + 1"})}),`
`,n.jsx(e.li,{children:"记录最大边长，返回面积"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m * n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(m * n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:t})]})}function a(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{a as default};
