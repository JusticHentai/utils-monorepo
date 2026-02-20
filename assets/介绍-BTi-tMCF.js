import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import moveZeroes from '../../../../packages/learn-utils/src/leetcode/moveZeroes'

const normalDemo = () => {
  const nums = [0, 1, 0, 3, 12]
  const numsCopy = [...nums]
  moveZeroes(numsCopy)

  return {
    input: nums,
    output: numsCopy, // [1, 3, 12, 0, 0]
    explanation: '将所有 0 移动到数组末尾，保持非零元素相对顺序',
  }
}

export default normalDemo
`,l=`export default function moveZeroes(nums: number[]): void {
  const n = nums.length

  let left = 0,
    right = 0
  while (right < n) {
    if (nums[right]) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]

      left++
    }

    right++
  }
}
`;function r(o){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"movezeroes-移动零",children:"moveZeroes 移动零"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/move-zeroes/",rel:"nofollow",children:"LeetCode 283. 移动零"})," 是双指针的简单题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"双指针",children:"双指针"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"left 指向下一个非零元素应该放置的位置"}),`
`,n.jsx(e.li,{children:"right 遍历数组"}),`
`,n.jsx(e.li,{children:"遇到非零元素就与 left 位置交换"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]})]})}function p(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{p as default};
