import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`export default function multiply(num1: string, num2: string): string {
  const len1 = num1.length
  const len2 = num2.length

  const pos = new Array(len1 + len2).fill(0)

  for (let i = len1 - 1; i >= 0; i--) {
    const n1 = +num1[i]
    for (let j = len2 - 1; j >= 0; j--) {
      const n2 = +num2[j]

      const multi = n1 * n2
      const sum = pos[i + j + 1] + multi

      pos[i + j + 1] = sum % 10
      pos[i + j] += (sum / 10) | 0
    }
  }

  while (pos[0] === 0) {
    pos.shift()
  }

  return pos.length ? pos.join('') : '0'
}
`,t=`import multiply from '../../../../packages/learn-utils/src/leetcode/multiply'

export default () => {
  const num1 = '123'
  const num2 = '456'

  const result = multiply(num1, num2)

  console.log('num1:', num1)
  console.log('num2:', num2)
  console.log('乘积:', result)

  return result
}
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"字符串相乘-leetcode-43",children:"字符串相乘 (LeetCode 43)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定两个以字符串形式表示的非负整数 ",n.jsx(e.code,{children:"num1"})," 和 ",n.jsx(e.code,{children:"num2"}),"，返回 ",n.jsx(e.code,{children:"num1"})," 和 ",n.jsx(e.code,{children:"num2"})," 的乘积，它们的乘积也表示为字符串形式。不能使用任何内置的大整数库或直接将输入转换为整数。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"模拟竖式乘法"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"两个数相乘，结果最多有 m + n 位"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"num1[i] * num2[j]"})," 的结果放在 ",n.jsx(e.code,{children:"pos[i+j]"})," 和 ",n.jsx(e.code,{children:"pos[i+j+1]"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"创建结果数组，长度为 len1 + len2"}),`
`,n.jsx(e.li,{children:"从后往前遍历两个数的每一位"}),`
`,n.jsx(e.li,{children:"计算乘积，处理进位"}),`
`,n.jsx(e.li,{children:"去除前导零，返回结果"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m * n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(m + n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(l,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(l,{language:"typescript",children:t})]})}function x(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
