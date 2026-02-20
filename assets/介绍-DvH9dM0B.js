import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import letterCombinations from '../../../../packages/learn-utils/src/leetcode/letterCombinations'

const normalDemo = () => {
  const digits = '23'
  const result = letterCombinations(digits)

  return {
    input: digits,
    output: result,
    count: result.length, // 9 = 3 × 3
    explanation: '2 对应 abc，3 对应 def',
  }
}

export default normalDemo
`,l=`export default function letterCombinations(digits: string): string[] {
  if (!digits && !digits.length) {
    return []
  }

  const n = digits.length
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const queue = []
  queue.push('')

  for (let i = 0; i < n; i++) {
    const levelSize = queue.length

    for (let j = 0; j < levelSize; j++) {
      const currentStr = queue.shift()

      // @ts-ignore any
      const letters = map[digits[i]]

      for (const l of letters) {
        queue.push(currentStr + l)
      }
    }
  }

  return queue
}
`;function r(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"lettercombinations-电话号码的字母组合",children:"letterCombinations 电话号码的字母组合"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",rel:"nofollow",children:"LeetCode 17. 电话号码的字母组合"})," 是回溯/BFS 的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"bfs-队列法",children:"BFS 队列法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"建立数字到字母的映射"}),`
`,n.jsx(e.li,{children:"使用队列逐层扩展"}),`
`,n.jsx(e.li,{children:"每层处理一个数字的所有字母"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(3^m × 4^n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(3^m × 4^n)"]}),`
`]})]})}function x(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{x as default};
