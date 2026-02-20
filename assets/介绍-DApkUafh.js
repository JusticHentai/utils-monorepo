import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import sortColors from '../../../../packages/learn-utils/src/leetcode/sortColors'

const normalDemo = () => {
  const nums = [2, 0, 2, 1, 1, 0]
  const numsCopy = [...nums]
  sortColors(numsCopy)

  return {
    input: nums,
    output: numsCopy, // [0, 0, 1, 1, 2, 2]
    explanation: '原地排序，0 代表红色，1 代表白色，2 代表蓝色',
  }
}

export default normalDemo
`,l=`export default function sortColors(nums: number[]): void {
  const n = nums.length
  let p0 = 0,
    p1 = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      ;[nums[i], nums[p1]] = [nums[p1], nums[i]]

      p1++
    } else if (nums[i] === 0) {
      ;[nums[i], nums[p0]] = [nums[p0], nums[i]]

      // 说明 p0 所在的是 1 给 p1 也流转下
      if (p0 < p1) {
        ;[nums[i], nums[p1]] = [nums[p1], nums[i]]
      }

      ++p0
      ++p1
    }
  }
}
`;function e(o){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"sortcolors-颜色分类",children:"sortColors 颜色分类"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.a,{href:"https://leetcode.cn/problems/sort-colors/",rel:"nofollow",children:"LeetCode 75. 颜色分类"})," 是双指针的经典题目，又称荷兰国旗问题。"]}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(s.p,{children:"给定一个包含红色、白色和蓝色（0、1、2）的数组 nums，原地对它们进行排序。"}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(s.h3,{id:"双指针",children:"双指针"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"p0 指向下一个 0 应该放置的位置"}),`
`,n.jsx(s.li,{children:"p1 指向下一个 1 应该放置的位置"}),`
`,n.jsx(s.li,{children:"遍历数组，遇到 0 或 1 进行交换"}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]})]})}function x(o={}){const{wrapper:s}={...i(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(e,{...o})}):e(o)}export{x as default};
