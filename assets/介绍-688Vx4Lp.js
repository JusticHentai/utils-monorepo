import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`// 注意：Trap.ts 中的函数没有 export default，需要直接复制逻辑
const trap = (height: number[]): number => {
  const n = height.length
  if (n === 0) return 0

  const leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return res
}

const normalDemo = () => {
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  const result = trap(height)

  return {
    input: height,
    output: result, // 6
    explanation: '上面是由数组表示的高度图，可以接 6 个单位的雨水',
  }
}

export default normalDemo
`,s=`/**
 * 接雨水
 * @param height
 */
function trap(height: number[]): number {
  const n = height.length

  if (n === 0) {
    return 0
  }

  const leftMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return res
}
`;function r(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"trap-接雨水",children:"Trap 接雨水"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.a,{href:"https://leetcode.cn/problems/trapping-rain-water/",rel:"nofollow",children:"LeetCode 42. 接雨水"})," 是经典的双指针/动态规划题目。"]}),`
`,n.jsx(i.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(i.p,{children:"给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。"}),`
`,n.jsx(i.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(i.h3,{id:"动态规划预处理",children:"动态规划预处理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"leftMax[i]"}),"：位置 i 左边的最大高度"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"rightMax[i]"}),"：位置 i 右边的最大高度"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"水量计算"}),"：",n.jsx(i.code,{children:"min(leftMax[i], rightMax[i]) - height[i]"})]}),`
`]}),`
`,n.jsx(i.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:s}),`
`,n.jsx(i.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(i.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(i.h2,{id:"其他解法",children:"其他解法"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"双指针"}),"：O(1) 空间"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"单调栈"}),"：O(n) 时间和空间"]}),`
`]})]})}function j(e={}){const{wrapper:i}={...h(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
