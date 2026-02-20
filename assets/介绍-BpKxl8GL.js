import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import generateParenthesis from '../../../../packages/learn-utils/src/leetcode/generateParenthesis'

const normalDemo = () => {
  const n = 3
  const result = generateParenthesis(n)

  return {
    input: n,
    output: result,
    count: result.length, // 5
    explanation: '3 对括号的所有有效组合',
  }
}

export default normalDemo
`,o=`export default function generateParenthesis(n: number): string[] {
  const res: string[] = []

  const dfs = (lRemain: number, rRemain: number, str: string) => {
    if (str.length === 2 * n) {
      res.push(str)

      return
    }

    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + '(')
    }

    if (lRemain < rRemain) {
      dfs(lRemain, rRemain - 1, str + ')')
    }
  }

  dfs(n, n, '')

  return res
}
`;function t(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"generateparenthesis-括号生成",children:"generateParenthesis 括号生成"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/generate-parentheses/",rel:"nofollow",children:"LeetCode 22. 括号生成"})," 是回溯算法的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给出 n 代表生成括号的对数，请你生成所有可能的并且有效的括号组合。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"dfs--剪枝",children:"DFS + 剪枝"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"左括号数量小于 n 时可以添加左括号"}),`
`,n.jsx(e.li,{children:"右括号数量小于左括号数量时可以添加右括号"}),`
`,n.jsx(e.li,{children:"字符串长度达到 2n 时记录结果"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(4^n / √n)，卡特兰数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]})]})}function x(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{x as default};
