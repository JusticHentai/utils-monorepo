import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function searchMatrix(
  matrix: number[][],
  target: number
): boolean {
  const m = matrix.length
  const n = matrix[0].length

  let x = 0,
    y = n - 1

  while (x < m && y >= 0) {
    if (matrix[x][y] === target) {
      return true
    }

    if (matrix[x][y] > target) {
      y--
    } else {
      x++
    }
  }

  return false
}
`,c=`import searchMatrix from '../../../../packages/learn-utils/src/leetcode/searchMatrix'

export default () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  const target = 5

  const result = searchMatrix(matrix, target)

  console.log('矩阵:', matrix)
  console.log('目标值:', target)
  console.log('是否存在:', result)

  return result
}
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"搜索二维矩阵-ii-leetcode-240",children:"搜索二维矩阵 II (LeetCode 240)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["编写一个高效的算法来搜索 ",n.jsx(e.code,{children:"m x n"})," 矩阵 ",n.jsx(e.code,{children:"matrix"})," 中的一个目标值 ",n.jsx(e.code,{children:"target"}),"。该矩阵具有以下特性：每行的元素从左到右升序排列，每列的元素从上到下升序排列。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Z 字形查找"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"从右上角开始搜索"}),`
`,n.jsx(e.li,{children:"如果当前值大于目标，向左移动"}),`
`,n.jsx(e.li,{children:"如果当前值小于目标，向下移动"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"从右上角 (0, n-1) 开始"}),`
`,n.jsx(e.li,{children:"如果当前值等于目标，返回 true"}),`
`,n.jsx(e.li,{children:"如果当前值大于目标，向左移动"}),`
`,n.jsx(e.li,{children:"如果当前值小于目标，向下移动"}),`
`,n.jsx(e.li,{children:"越界则返回 false"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m + n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:c})]})}function m(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{m as default};
