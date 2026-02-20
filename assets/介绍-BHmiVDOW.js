import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import rotate from '../../../../packages/learn-utils/src/leetcode/rotate'

const normalDemo = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const matrixCopy = matrix.map((row) => [...row])
  rotate(matrixCopy)

  return {
    input: matrix,
    output: matrixCopy,
    // [[7,4,1],[8,5,2],[9,6,3]]
    explanation: '顺时针旋转 90 度',
  }
}

export default normalDemo
`,s=`export default function rotate(matrix: number[][]): void {
  const n = matrix.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    // 保证奇数
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i][j]

      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
}
`;function i(r){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"rotate-旋转图像",children:"rotate 旋转图像"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://leetcode.cn/problems/rotate-image/",rel:"nofollow",children:"LeetCode 48. 旋转图像"})," 是矩阵操作的经典题目。"]}),`
`,n.jsx(t.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(t.p,{children:"给定一个 n × n 的二维矩阵 matrix 表示一个图像，请你将图像顺时针旋转 90 度。"}),`
`,n.jsx(t.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(t.h3,{id:"原地旋转",children:"原地旋转"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsx(t.li,{children:"每次旋转四个位置的元素"}),`
`,n.jsx(t.li,{children:"只需处理 1/4 的元素"}),`
`,n.jsx(t.li,{children:"使用临时变量保存被覆盖的值"}),`
`]}),`
`,n.jsx(t.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(e,{language:"typescript",children:s}),`
`,n.jsx(t.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(t.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"时间复杂度"}),"：O(n²)"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(t.h2,{id:"其他方法",children:"其他方法"}),`
`,n.jsx(t.p,{children:"先转置矩阵，再左右翻转"})]})}function j(r={}){const{wrapper:t}={...o(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
