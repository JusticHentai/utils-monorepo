import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`export default function nextPermutation(nums: number[]): void {
  let i = nums.length - 2

  // 寻找第一个 小于右邻居的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  // 如果不是全部都要翻转的话 i 就大于 0 找比 num[i] 小的数来换
  if (i >= 0) {
    let j = nums.length - 1

    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }

    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  // 翻转 如果上面没进入 就是全部翻转 上面进入那就是翻转交换往后的
  // 这里双指针交换 快一点
  let l = i + 1
  let r = nums.length - 1

  while (l < r) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}
`,o=`import nextPermutation from '../../../../packages/learn-utils/src/leetcode/nextPermutation'

export default () => {
  const nums = [1, 2, 3]

  console.log('原数组:', [...nums])
  nextPermutation(nums)
  console.log('下一个排列:', nums)

  return nums
}
`;function l(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"下一个排列-leetcode-31",children:"下一个排列 (LeetCode 31)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"整数数组的下一个排列是指其整数的下一个字典序更大的排列。必须原地修改，只允许使用额外常数空间。"}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"两遍扫描"}),"："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"从后往前找第一个升序对 (i, i+1)"}),`
`,n.jsx(e.li,{children:"从后往前找第一个大于 nums[i] 的数，交换"}),`
`,n.jsx(e.li,{children:"反转 i+1 之后的部分"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["从后往前找第一个 ",n.jsx(e.code,{children:"nums[i] < nums[i+1]"})," 的位置"]}),`
`,n.jsxs(e.li,{children:["从后往前找第一个 ",n.jsx(e.code,{children:"nums[j] > nums[i]"})," 的位置"]}),`
`,n.jsxs(e.li,{children:["交换 ",n.jsx(e.code,{children:"nums[i]"})," 和 ",n.jsx(e.code,{children:"nums[j]"})]}),`
`,n.jsxs(e.li,{children:["反转 ",n.jsx(e.code,{children:"i+1"})," 之后的部分"]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(i,{language:"typescript",children:o})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{j as default};
