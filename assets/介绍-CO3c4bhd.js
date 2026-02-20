import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    dp[i] = i

    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }

  return dp[n]
}
`,o=`import numSquares from '../../../../packages/learn-utils/src/leetcode/numSquares'

export default () => {
  const n = 12

  const result = numSquares(n)

  console.log('n =', n)
  console.log('最少完全平方数个数:', result)
  console.log('12 = 4 + 4 + 4')

  return result
}
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"完全平方数-leetcode-279",children:"完全平方数 (LeetCode 279)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个整数 ",n.jsx(e.code,{children:"n"}),"，返回和为 ",n.jsx(e.code,{children:"n"})," 的完全平方数的最少数量。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dp[i]"})," 表示和为 i 的完全平方数的最少数量"]}),`
`,n.jsxs(e.li,{children:["状态转移：",n.jsx(e.code,{children:"dp[i] = min(dp[i], dp[i - j*j] + 1)"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["初始化 ",n.jsx(e.code,{children:"dp[i] = i"}),"（最坏情况全是 1）"]}),`
`,n.jsxs(e.li,{children:["对于每个 i，遍历所有 ",n.jsx(e.code,{children:"j*j <= i"})]}),`
`,n.jsxs(e.li,{children:["更新 ",n.jsx(e.code,{children:"dp[i] = min(dp[i], dp[i - j*j] + 1)"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n * √n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:o})]})}function p(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
