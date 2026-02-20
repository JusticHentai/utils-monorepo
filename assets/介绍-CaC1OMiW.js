import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`// export default function maximalRectangle(matrix: string[][]): number {
//   const m = matrix.length
//   const n = matrix[0].length
//
//   const heights = Array.from(new Array(m), () => new Array(n).fill(0))
//
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === '1') {
//       }
//     }
//   }
// }
`,c=`// import maximalRectangle from '../../../../packages/learn-utils/src/leetcode/maximalRectangle'

export default () => {
  const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]

  // const result = maximalRectangle(matrix)

  console.log('矩阵:', matrix)
  console.log('最大矩形面积: 待实现')

  return '待实现'
}
`;function l(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最大矩形-leetcode-85",children:"最大矩形 (LeetCode 85)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个仅包含 ",n.jsx(e.code,{children:"0"})," 和 ",n.jsx(e.code,{children:"1"}),"、大小为 ",n.jsx(e.code,{children:"rows x cols"})," 的二维二进制矩阵，找出只包含 ",n.jsx(e.code,{children:"1"})," 的最大矩形，并返回其面积。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"单调栈 + 柱状图"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将问题转化为多个「柱状图中最大矩形」问题"}),`
`,n.jsx(e.li,{children:"逐行计算以当前行为底的柱状图高度"}),`
`,n.jsx(e.li,{children:"对每行应用单调栈求解最大矩形"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"预处理每个位置向上连续 1 的个数（高度）"}),`
`,n.jsx(e.li,{children:"对每一行，将高度数组视为柱状图"}),`
`,n.jsx(e.li,{children:"使用单调栈求解柱状图中的最大矩形"}),`
`,n.jsx(e.li,{children:"取所有行的最大值"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m * n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:c})]})}function m(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(l,{...r})}):l(r)}export{m as default};
