import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import wordBreak from '../../../../packages/learn-utils/src/leetcode/wordBreak'

const normalDemo = () => {
  const testCases = [
    { s: 'leetcode', wordDict: ['leet', 'code'], expected: true },
    { s: 'applepenapple', wordDict: ['apple', 'pen'], expected: true },
    { s: 'catsandog', wordDict: ['cats', 'dog', 'sand', 'and', 'cat'], expected: false },
  ]

  const results = testCases.map(({ s, wordDict, expected }) => ({
    s,
    wordDict,
    output: wordBreak(s, wordDict),
    expected,
  }))

  return {
    testCases: results,
    explanation: '判断字符串是否可以被字典中的单词拼接',
  }
}

export default normalDemo
`,d=`export default function wordBreak(s: string, wordDict: string[]): boolean {
  const length = s.length
  const wordSet = new Set(wordDict)
  const memo = new Array(length)

  const dfs = (start: number) => {
    // 越界 看下面前方有个 has 说明 已经通过了所有 ok
    if (start === length) {
      return true
    }

    // 以 x 为下标的值 的结果
    if (memo[start] !== undefined) return memo[start]

    for (let i = start + 1; i <= length; i++) {
      const prefix = s.slice(start, i)

      if (wordSet.has(prefix) && dfs(i)) {
        memo[start] = true

        return true
      }
    }

    memo[start] = false

    return false
  }

  return dfs(0)
}
`;function s(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"wordbreak-单词拆分",children:"wordBreak 单词拆分"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/word-break/",rel:"nofollow",children:"LeetCode 139. 单词拆分"})," 是动态规划/记忆化搜索的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"dfs--记忆化",children:"DFS + 记忆化"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"从位置 0 开始，尝试匹配字典中的单词"}),`
`,n.jsx(e.li,{children:"匹配成功则递归处理剩余部分"}),`
`,n.jsx(e.li,{children:"使用 memo 数组记录已计算的结果"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n²)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/word-break-ii/",rel:"nofollow",children:"单词拆分 II"})}),`
`]})]})}function m(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
