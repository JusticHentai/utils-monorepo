import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function numTrees(n: number): number {
  const dp = new Array(n + 1).fill(0)

  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1]
    }
  }

  return dp[n]
}
`,c=`import numTrees from '../../../../packages/learn-utils/src/leetcode/numTrees'

export default () => {
  const n = 3

  const result = numTrees(n)

  console.log('n =', n)
  console.log('不同的二叉搜索树数量:', result)

  return result
}
`;function d(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"不同的二叉搜索树-leetcode-96",children:"不同的二叉搜索树 (LeetCode 96)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个整数 ",n.jsx(e.code,{children:"n"}),"，求恰由 ",n.jsx(e.code,{children:"n"})," 个节点组成且节点值从 ",n.jsx(e.code,{children:"1"})," 到 ",n.jsx(e.code,{children:"n"})," 互不相同的二叉搜索树有多少种？"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划（卡特兰数）"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dp[i]"})," 表示 i 个节点能组成的 BST 数量"]}),`
`,n.jsx(e.li,{children:"以每个节点为根，左子树和右子树的组合数相乘"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"dp[0] = dp[1] = 1"})}),`
`,n.jsxs(e.li,{children:["对于 ",n.jsx(e.code,{children:"dp[i]"}),"，遍历每个可能的根节点 j"]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"dp[i] += dp[j] * dp[i - j - 1]"})}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n²)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:c})]})}function u(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{u as default};
