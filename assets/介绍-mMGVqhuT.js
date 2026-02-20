import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import isValid from '../../../../packages/learn-utils/src/leetcode/isValid'

const normalDemo = () => {
  const testCases = ['()', '()[]{}', '(]', '([)]', '{[]}']

  const results = testCases.map((s) => ({
    input: s,
    output: isValid(s),
  }))

  return {
    testCases: results,
    explanation: {
      '()': '有效',
      '()[]{}': '有效',
      '(]': '无效，括号类型不匹配',
      '([)]': '无效，括号顺序不对',
      '{[]}': '有效',
    },
  }
}

export default normalDemo
`,d=`export default function isValid(s: string): boolean {
  const n = s.length
  if (n % 2 === 1) {
    return false
  }

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])

  const stk = []

  for (const ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false
      }
      stk.pop()
    } else {
      stk.push(ch)
    }
  }

  return !stk.length
}
`;function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"isvalid-有效的括号",children:"isValid 有效的括号"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.a,{href:"https://leetcode.cn/problems/valid-parentheses/",rel:"nofollow",children:"LeetCode 20. 有效的括号"})," 是栈的经典应用题。"]}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(s.p,{children:["给定一个只包括 ",n.jsx(s.code,{children:"'('"}),"，",n.jsx(s.code,{children:"')'"}),"，",n.jsx(s.code,{children:"'{'"}),"，",n.jsx(s.code,{children:"'}'"}),"，",n.jsx(s.code,{children:"'['"}),"，",n.jsx(s.code,{children:"']'"})," 的字符串 s，判断字符串是否有效。"]}),`
`,n.jsx(s.p,{children:"有效字符串需满足："}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"左括号必须用相同类型的右括号闭合"}),`
`,n.jsx(s.li,{children:"左括号必须以正确的顺序闭合"}),`
`]}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(s.h3,{id:"栈--哈希表",children:"栈 + 哈希表"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"建立映射"}),"：右括号映射到对应的左括号"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"遍历字符串"}),"：",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"遇到左括号，入栈"}),`
`,n.jsx(s.li,{children:"遇到右括号，检查栈顶是否匹配"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"最终检查"}),"：栈为空则有效"]}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(l,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(s.h3,{id:"s",children:"s"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string"})]}),`
`,n.jsx(s.li,{children:"描述：只包含括号字符的字符串"}),`
`]}),`
`,n.jsx(s.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：括号是否有效"}),`
`]}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(n)，遍历一次字符串"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(n)，栈的最大深度"]}),`
`]}),`
`,n.jsx(s.h2,{id:"优化技巧",children:"优化技巧"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"长度判断"}),"：奇数长度直接返回 false"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"提前返回"}),"：遇到不匹配立即返回"]}),`
`]}),`
`,n.jsx(s.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://leetcode.cn/problems/longest-valid-parentheses/",rel:"nofollow",children:"最长有效括号"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://leetcode.cn/problems/generate-parentheses/",rel:"nofollow",children:"括号生成"})}),`
`]})]})}function p(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{p as default};
