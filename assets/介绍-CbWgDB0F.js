import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`export default function longestValidParentheses(s: string): number {
  let maxLength = 0
  const length = s.length

  const dp = new Array(length).fill(0)

  for (let i = 1; i < length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2
        } else {
          dp[i] = 2
        }
      } else if (s[i - dp[i - 1] - 1] === '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
        } else {
          dp[i] = dp[i - 1] + 2
        }
      }
    }

    maxLength = Math.max(maxLength, dp[i])
  }

  return maxLength
}
`,t=`import longestValidParentheses from '../../../../packages/learn-utils/src/leetcode/longestValidParentheses'

export default () => {
  const testCases = [')()())', '(()']

  const results = testCases.map((s) => ({
    input: s,
    result: longestValidParentheses(s),
  }))

  console.log('最长有效括号测试:')
  results.forEach(({ input, result }) => {
    console.log(\`"\${input}" => \${result}\`)
  })

  return results
}
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最长有效括号-leetcode-32",children:"最长有效括号 (LeetCode 32)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个只包含 ",n.jsx(e.code,{children:"("})," 和 ",n.jsx(e.code,{children:")"})," 的字符串，找出最长有效（格式正确且连续）括号子串的长度。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dp[i]"})," 表示以 ",n.jsx(e.code,{children:"s[i]"})," 结尾的最长有效括号长度"]}),`
`,n.jsxs(e.li,{children:["只有当 ",n.jsx(e.code,{children:"s[i] = ')'"})," 时才可能有有效括号"]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"s[i] = ')'"})," 且 ",n.jsx(e.code,{children:"s[i-1] = '('"}),"，则 ",n.jsx(e.code,{children:"dp[i] = dp[i-2] + 2"})]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"s[i] = ')'"})," 且 ",n.jsx(e.code,{children:"s[i-1] = ')'"}),"，检查 ",n.jsx(e.code,{children:"s[i - dp[i-1] - 1]"})," 是否为 ",n.jsx(e.code,{children:"("})]}),`
`,n.jsxs(e.li,{children:["如果是，则 ",n.jsx(e.code,{children:"dp[i] = dp[i-1] + 2 + dp[i - dp[i-1] - 2]"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:t})]})}function a(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{a as default};
