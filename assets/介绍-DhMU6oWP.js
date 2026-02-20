import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`/**
 * 正则表达式匹配
 */
export default function isMatch(s: string, p: string): boolean {
  const sLength = s.length,
    pLength = p.length

  const dp = Array.from(new Array(sLength + 1), () =>
    new Array(pLength + 1).fill(false)
  )

  // 边界条件
  dp[0][0] = true

  for (let j = 1; j < pLength + 1; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }

  // 正常情况
  for (let i = 1; i < sLength + 1; i++) {
    for (let j = 1; j < pLength + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[sLength][pLength]
}
`,l=`import isMatch from '../../../../packages/learn-utils/src/leetcode/isMatch'

export default () => {
  const testCases = [
    { s: 'aa', p: 'a' },
    { s: 'aa', p: 'a*' },
    { s: 'ab', p: '.*' },
  ]

  const results = testCases.map(({ s, p }) => ({
    s,
    p,
    result: isMatch(s, p),
  }))

  console.log('正则表达式匹配测试:')
  results.forEach(({ s, p, result }) => {
    console.log(\`s="\${s}", p="\${p}" => \${result}\`)
  })

  return results
}
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"正则表达式匹配-leetcode-10",children:"正则表达式匹配 (LeetCode 10)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个字符串 ",n.jsx(e.code,{children:"s"})," 和一个字符规律 ",n.jsx(e.code,{children:"p"}),"，请你来实现一个支持 ",n.jsx(e.code,{children:"."})," 和 ",n.jsx(e.code,{children:"*"})," 的正则表达式匹配。"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"."})," 匹配任意单个字符"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"*"})," 匹配零个或多个前面的那一个元素"]}),`
`]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dp[i][j]"})," 表示 ",n.jsx(e.code,{children:"s"})," 的前 ",n.jsx(e.code,{children:"i"})," 个字符与 ",n.jsx(e.code,{children:"p"})," 的前 ",n.jsx(e.code,{children:"j"})," 个字符是否匹配"]}),`
`,n.jsxs(e.li,{children:["根据当前字符和 ",n.jsx(e.code,{children:"*"})," 的情况进行状态转移"]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["初始化：",n.jsx(e.code,{children:"dp[0][0] = true"}),"，处理 ",n.jsx(e.code,{children:"p"})," 以 ",n.jsx(e.code,{children:"*"})," 开头的情况"]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"p[j-1]"})," 是普通字符或 ",n.jsx(e.code,{children:"."}),"，检查是否匹配"]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"p[j-1]"})," 是 ",n.jsx(e.code,{children:"*"}),"，考虑匹配 0 次或多次"]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m * n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(m * n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:l})]})}function a(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{a as default};
