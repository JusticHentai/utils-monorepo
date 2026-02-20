import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`function hammingDistance(x: number, y: number): number {
  let strX = x.toString(2)
  let strY = y.toString(2)

  const maxLength = Math.max(strX.length, strY.length)

  strX = strX.padStart(maxLength, '0')
  strY = strY.padStart(maxLength, '0')

  let res = 0

  for (let i = 0; i < maxLength; i++) {
    if (strX[i] !== strY[i]) {
      res++
    }
  }

  return res
}
`,o=`// hammingDistance 未导出，这里展示算法思路
export default () => {
  const x = 1 // 二进制: 0001
  const y = 4 // 二进制: 0100

  // 计算汉明距离
  let strX = x.toString(2)
  let strY = y.toString(2)
  const maxLength = Math.max(strX.length, strY.length)
  strX = strX.padStart(maxLength, '0')
  strY = strY.padStart(maxLength, '0')

  let res = 0
  for (let i = 0; i < maxLength; i++) {
    if (strX[i] !== strY[i]) res++
  }

  console.log('x =', x, '二进制:', strX)
  console.log('y =', y, '二进制:', strY)
  console.log('汉明距离:', res)

  return res
}
`;function s(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"汉明距离-leetcode-461",children:"汉明距离 (LeetCode 461)"}),`
`,n.jsx(t.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(t.p,{children:["两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。给你两个整数 ",n.jsx(t.code,{children:"x"})," 和 ",n.jsx(t.code,{children:"y"}),"，计算并返回它们之间的汉明距离。"]}),`
`,n.jsx(t.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"位运算"}),"："]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"将两个数转换为二进制字符串"}),`
`,n.jsx(t.li,{children:"对齐后逐位比较不同的位数"}),`
`]}),`
`,n.jsx(t.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsx(t.li,{children:"将两个数转换为二进制字符串"}),`
`,n.jsx(t.li,{children:"用 0 补齐到相同长度"}),`
`,n.jsx(t.li,{children:"逐位比较，统计不同的位数"}),`
`]}),`
`,n.jsx(t.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"时间复杂度"}),"：O(log(max(x, y)))"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"空间复杂度"}),"：O(log(max(x, y)))"]}),`
`]}),`
`,n.jsx(t.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(t.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:o})]})}function g(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{g as default};
