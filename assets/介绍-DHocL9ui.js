import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`/**
 * 二维数组中的查找
 */
export default function findNumberIn2DArray(
  matrix: number[][],
  target: number
): boolean {
  const m = matrix?.length || 0
  const n = matrix[0]?.length || 0

  for (let i = 0; i < m; i++) {
    const res = binarySearch(n, (midIndex: number) => {
      if (matrix[i][midIndex] > target) {
        return 1
      } else if (matrix[i][midIndex] < target) {
        return 2
      }

      return 3
    })

    if (res !== -1) {
      return true
    }
  }

  return false
}

function binarySearch(
  length: number,
  cb: (midIndex: number) => 1 | 2 | 3
): number {
  if (length <= 0) return -1

  let lowIndex = 0
  let highIndex = length - 1

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)

    const res = cb(midIndex)

    if (res === 1) {
      highIndex = midIndex - 1
    } else if (res === 2) {
      lowIndex = midIndex + 1
    } else {
      return midIndex
    }
  }

  return -1
}
`,d=`import findNumberIn2DArray from '../../../../packages/learn-utils/src/leetcode/findNumberIn2DArray'

export default () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ]
  const target = 5

  const result = findNumberIn2DArray(matrix, target)

  console.log('二维数组:', matrix)
  console.log('目标值:', target)
  console.log('是否存在:', result)

  return result
}
`;function t(r){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"二维数组中的查找-剑指-offer-04",children:"二维数组中的查找 (剑指 Offer 04)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"二分查找"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"利用矩阵的有序性"}),`
`,n.jsx(e.li,{children:"对每一行进行二分查找"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"遍历每一行"}),`
`,n.jsx(e.li,{children:"对每一行进行二分查找"}),`
`,n.jsx(e.li,{children:"如果找到目标值，返回 true"}),`
`,n.jsx(e.li,{children:"遍历完所有行都没找到，返回 false"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m * log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:d})]})}function a(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{a as default};
