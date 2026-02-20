import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`export default function countBits(n: number): number[] {
  const dp = [0]

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2]
    } else {
      dp[i] = dp[i - 1] + 1
    }
  }

  return dp
}
`,o=`import countBits from '../../../../packages/learn-utils/src/leetcode/countBits'

export default () => {
  const n = 5

  const result = countBits(n)

  console.log('输入 n:', n)
  console.log('0 到 n 每个数的二进制 1 的个数:', result)
  console.log('解释: 0->0, 1->1, 2->1, 3->2, 4->1, 5->2')

  return result
}
`;function d(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"比特位计数-leetcode-338",children:"比特位计数 (LeetCode 338)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个整数 ",n.jsx(e.code,{children:"n"}),"，对于 ",n.jsx(e.code,{children:"0 <= i <= n"})," 中的每个 ",n.jsx(e.code,{children:"i"}),"，计算其二进制表示中 ",n.jsx(e.code,{children:"1"})," 的个数，返回一个长度为 ",n.jsx(e.code,{children:"n + 1"})," 的数组 ",n.jsx(e.code,{children:"ans"})," 作为答案。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划 + 位运算"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"偶数的二进制 1 的个数等于其一半的 1 的个数（右移一位）"}),`
`,n.jsx(e.li,{children:"奇数的二进制 1 的个数等于前一个偶数的 1 的个数加 1"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"dp[0] = 0"})}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"i"})," 是偶数：",n.jsx(e.code,{children:"dp[i] = dp[i / 2]"})]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"i"})," 是奇数：",n.jsx(e.code,{children:"dp[i] = dp[i - 1] + 1"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:o})]})}function u(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{u as default};
