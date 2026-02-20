import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function largestRectangleArea(heights: number[]): number {
  let maxArea = 0

  const stack: number[] = []

  // 两个 0 方便解决边界判断
  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop() as number

      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }

    stack.push(i)
  }

  return maxArea
}
`,c=`import largestRectangleArea from '../../../../packages/learn-utils/src/leetcode/largestRectangleArea'

export default () => {
  const heights = [2, 1, 5, 6, 2, 3]

  const result = largestRectangleArea(heights)

  console.log('柱状图高度:', heights)
  console.log('最大矩形面积:', result)

  return result
}
`;function r(s){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"柱状图中最大的矩形-leetcode-84",children:"柱状图中最大的矩形 (LeetCode 84)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。求在该柱状图中，能够勾勒出来的矩形的最大面积。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"单调栈"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"维护一个单调递增的栈"}),`
`,n.jsx(e.li,{children:"当遇到比栈顶小的元素时，弹出栈顶并计算面积"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"在数组两端添加 0，简化边界处理"}),`
`,n.jsx(e.li,{children:"遍历数组，维护单调递增栈"}),`
`,n.jsx(e.li,{children:"当当前高度小于栈顶高度时，弹出栈顶并计算面积"}),`
`,n.jsx(e.li,{children:"更新最大面积"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:c})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
