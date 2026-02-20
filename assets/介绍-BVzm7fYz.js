import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import longestPalindrome from '../../../../packages/learn-utils/src/leetcode/longestPalindrome'

const normalDemo = () => {
  const testCases = ['babad', 'cbbd', 'a', 'ac']

  const results = testCases.map((s) => ({
    input: s,
    output: longestPalindrome(s),
  }))

  return {
    testCases: results,
    explanation: {
      babad: '"bab" 或 "aba" 都是有效答案',
      cbbd: '"bb" 是最长回文子串',
    },
  }
}

export default normalDemo
`,o=`/**
 * 最长回文子串
 */
export default function longestPalindrome(s: string): string {
  const length = s.length

  let res = ''

  const dp = Array.from(new Array(length), () => new Array(length).fill(0))

  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
      dp[i][j] = s[i] === s[j] && (j - i + 1 < 3 || dp[i + 1][j - 1])

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }

  return res
}
`;function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"longestpalindrome-最长回文子串",children:"longestPalindrome 最长回文子串"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/longest-palindromic-substring/",rel:"nofollow",children:"LeetCode 5. 最长回文子串"})," 是动态规划的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个字符串 s，找到 s 中最长的回文子串。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"动态规划",children:"动态规划"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态定义"}),"：",n.jsx(e.code,{children:"dp[i][j]"})," 表示 s[i..j] 是否为回文"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态转移"}),"：",n.jsx(e.code,{children:"dp[i][j] = s[i] === s[j] && (j-i < 3 || dp[i+1][j-1])"})]}),`
`,n.jsx(e.li,{children:"从短到长遍历所有子串"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n²)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n²)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"其他解法",children:"其他解法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"中心扩展"}),"：O(n²) 时间，O(1) 空间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Manacher 算法"}),"：O(n)"]}),`
`]})]})}function p(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{p as default};
