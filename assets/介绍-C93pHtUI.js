import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import maxArea from '../../../../packages/learn-utils/src/leetcode/maxArea'

const normalDemo = () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  const result = maxArea(height)

  return {
    input: height,
    output: result, // 49
    explanation: '选择索引 1 和 8 的柱子，面积 = min(8, 7) × 7 = 49',
  }
}

export default normalDemo
`,o=`export default function maxArea(height: number[]): number {
  let lowIndex = 0,
    highIndex = height.length - 1,
    res = 0

  while (lowIndex < highIndex) {
    if (height[lowIndex] < height[highIndex]) {
      res = Math.max(res, (highIndex - lowIndex) * height[lowIndex])
      lowIndex++
    } else {
      res = Math.max(res, (highIndex - lowIndex) * height[highIndex])
      highIndex--
    }
  }

  return res
}
`;function h(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"maxarea-盛最多水的容器",children:"maxArea 盛最多水的容器"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/container-with-most-water/",rel:"nofollow",children:"LeetCode 11. 盛最多水的容器"})," 是双指针的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个长度为 n 的整数数组 height。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"双指针",children:"双指针"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"左右指针从两端开始"}),`
`,n.jsx(e.li,{children:"计算当前面积，更新最大值"}),`
`,n.jsx(e.li,{children:"移动较短的那个指针"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"为什么移动较短的指针",children:"为什么移动较短的指针？"}),`
`,n.jsx(e.p,{children:"移动较长的指针不会使面积增大，因为面积由较短的边决定。"})]})}function g(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(h,{...r})}):h(r)}export{g as default};
