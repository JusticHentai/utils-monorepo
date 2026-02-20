import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`export default function minDistance(word1: string, word2: string): number {
  const n = word1.length
  const m = word2.length

  // 有空
  if (m * n === 0) {
    return m + n
  }

  // 为了好看一般 从 1 开始
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0))

  // 初始化 word2 为空 需要 删除几次
  for (let i = 1; i <= n; i++) {
    dp[i][0] = i
  }

  // 初始化 word1 为空 需要 增加几次
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        )
      }
    }
  }

  return dp[n][m]
}
`,c=`import minDistance from '../../../../packages/learn-utils/src/leetcode/minDistance'

export default () => {
  const word1 = 'horse'
  const word2 = 'ros'

  const result = minDistance(word1, word2)

  console.log('word1:', word1)
  console.log('word2:', word2)
  console.log('编辑距离:', result)
  console.log('操作: horse -> rorse -> rose -> ros')

  return result
}
`;function d(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"编辑距离-leetcode-72",children:"编辑距离 (LeetCode 72)"}),`
`,n.jsx(r.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(r.p,{children:["给你两个单词 ",n.jsx(r.code,{children:"word1"})," 和 ",n.jsx(r.code,{children:"word2"}),"，请返回将 ",n.jsx(r.code,{children:"word1"})," 转换成 ",n.jsx(r.code,{children:"word2"})," 所使用的最少操作数。你可以对一个单词进行如下三种操作：插入一个字符、删除一个字符、替换一个字符。"]}),`
`,n.jsx(r.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"dp[i][j]"})," 表示 word1 前 i 个字符转换为 word2 前 j 个字符的最少操作数"]}),`
`,n.jsx(r.li,{children:"三种操作对应三种状态转移"}),`
`]}),`
`,n.jsx(r.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:["初始化边界：",n.jsx(r.code,{children:"dp[i][0] = i"}),"，",n.jsx(r.code,{children:"dp[0][j] = j"})]}),`
`,n.jsxs(r.li,{children:["如果 ",n.jsx(r.code,{children:"word1[i-1] == word2[j-1]"}),"，",n.jsx(r.code,{children:"dp[i][j] = dp[i-1][j-1]"})]}),`
`,n.jsxs(r.li,{children:["否则 ",n.jsx(r.code,{children:"dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1"})]}),`
`]}),`
`,n.jsx(r.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"时间复杂度"}),"：O(m * n)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"空间复杂度"}),"：O(m * n)"]}),`
`]}),`
`,n.jsx(r.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:s}),`
`,n.jsx(r.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(o,{language:"typescript",children:c})]})}function m(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(d,{...e})}):d(e)}export{m as default};
