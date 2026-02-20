import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import search from '../../../../packages/learn-utils/src/leetcode/search'

const normalDemo = () => {
  const testCases = [
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
    { nums: [1], target: 0, expected: -1 },
  ]

  const results = testCases.map(({ nums, target, expected }) => ({
    nums,
    target,
    output: search(nums, target),
    expected,
  }))

  return {
    testCases: results,
    explanation: '在旋转排序数组中搜索目标值',
  }
}

export default normalDemo
`,o=`export default function search(nums: number[], target: number): number {
  const n = nums.length

  if (n === 0) {
    return -1
  }

  if (n === 1) {
    return nums[0] === target ? 0 : -1
  }

  let l = 0,
    r = n - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}
`;function s(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"search-搜索旋转排序数组",children:"search 搜索旋转排序数组"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/search-in-rotated-sorted-array/",rel:"nofollow",children:"LeetCode 33. 搜索旋转排序数组"})," 是二分查找的变体题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"整数数组 nums 按升序排列，数组中的值互不相同。在传递给函数之前，nums 在预先未知的某个下标 k 上进行了旋转。给你旋转后的数组 nums 和一个整数 target，如果 nums 中存在这个目标值，则返回它的下标，否则返回 -1。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"二分查找",children:"二分查找"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"找到中点，判断哪半部分是有序的"}),`
`,n.jsx(e.li,{children:"判断 target 是否在有序部分"}),`
`,n.jsx(e.li,{children:"根据判断结果缩小搜索范围"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/",rel:"nofollow",children:"搜索旋转排序数组 II"})}),`
`]})]})}function x(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{x as default};
