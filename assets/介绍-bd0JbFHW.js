import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export default function searchRange(nums: number[], target: number): number[] {
  const ans = [-1, -1]

  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false) - 1

  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex]
  }

  return ans
}

function binarySearch(nums: number[], target: number, lower: boolean): number {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }

  return ans
}
`,o=`import searchRange from '../../../../packages/learn-utils/src/leetcode/searchRange'

export default () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  const result = searchRange(nums, target)

  console.log('数组:', nums)
  console.log('目标值:', target)
  console.log('目标范围:', result)

  return result
}
`;function s(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"在排序数组中查找元素的第一个和最后一个位置-leetcode-34",children:"在排序数组中查找元素的第一个和最后一个位置 (LeetCode 34)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个按照非递减顺序排列的整数数组 ",n.jsx(e.code,{children:"nums"}),"，和一个目标值 ",n.jsx(e.code,{children:"target"}),"。请你找出给定目标值在数组中的开始位置和结束位置。如果数组中不存在目标值 ",n.jsx(e.code,{children:"target"}),"，返回 ",n.jsx(e.code,{children:"[-1, -1]"}),"。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"两次二分查找"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"第一次找左边界（第一个等于 target 的位置）"}),`
`,n.jsx(e.li,{children:"第二次找右边界（最后一个等于 target 的位置）"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"二分查找左边界：找第一个 >= target 的位置"}),`
`,n.jsx(e.li,{children:"二分查找右边界：找第一个 > target 的位置 - 1"}),`
`,n.jsx(e.li,{children:"验证找到的位置是否有效"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:o})]})}function x(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{x as default};
