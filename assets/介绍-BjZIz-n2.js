import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`/**
 * 替换空格
 */
export default function replaceSpace(s: string): string {
  const sList = s.split('')

  const oldLength = s.length

  let spaceCount = 0

  for (const item of sList) {
    if (item === ' ') spaceCount++
  }

  sList.length += spaceCount * 2

  for (let i = oldLength - 1, j = sList.length - 1; i >= 0; i--, j--) {
    if (sList[i] !== ' ') {
      sList[j] = sList[i]
    } else {
      sList[j - 2] = '%'
      sList[j - 1] = '2'
      sList[j] = '0'
      j -= 2
    }
  }

  return sList.join('')
}
`,o=`import replaceSpace from '../../../../packages/learn-utils/src/leetcode/replaceSpace'

export default () => {
  const s = 'We are happy.'

  const result = replaceSpace(s)

  console.log('原字符串:', s)
  console.log('替换后:', result)

  return result
}
`;function t(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"替换空格-剑指-offer-05",children:"替换空格 (剑指 Offer 05)"}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(s.p,{children:["请实现一个函数，把字符串 ",n.jsx(s.code,{children:"s"}),' 中的每个空格替换成 "%20"。']}),`
`,n.jsx(s.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"双指针（从后往前）"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"先统计空格数量，扩展数组长度"}),`
`,n.jsx(s.li,{children:"从后往前填充，避免覆盖"}),`
`]}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"统计空格数量"}),`
`,n.jsx(s.li,{children:"扩展数组长度（每个空格需要额外 2 个位置）"}),`
`,n.jsx(s.li,{children:'从后往前遍历，遇到空格填充 "%20"'}),`
`,n.jsx(s.li,{children:"非空格字符直接复制"}),`
`]}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:o})]})}function a(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{a as default};
