import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`export default function maxProduct(nums: number[]): number {
  let res = nums[0]

  let prevMin = nums[0]
  let prevMax = nums[0]

  let temp1 = 0,
    temp2 = 0

  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i]
    temp2 = prevMax * nums[i]

    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])

    res = Math.max(prevMax, res)
  }

  return res
}
`,c=`import maxProduct from '../../../../packages/learn-utils/src/leetcode/maxProduct'

export default () => {
  const nums = [2, 3, -2, 4]

  const result = maxProduct(nums)

  console.log('输入数组:', nums)
  console.log('最大乘积子数组:', result)
  console.log('子数组 [2, 3] 的乘积最大为 6')

  return result
}
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"乘积最大子数组-leetcode-152",children:"乘积最大子数组 (LeetCode 152)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个整数数组 ",n.jsx(e.code,{children:"nums"}),"，请你找出数组中乘积最大的非空连续子数组，并返回该子数组所对应的乘积。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"动态规划"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"由于负数乘以负数会变成正数，需要同时维护最大值和最小值"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"prevMax"})," 记录以当前位置结尾的最大乘积"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"prevMin"})," 记录以当前位置结尾的最小乘积"]}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["初始化 ",n.jsx(e.code,{children:"prevMax = prevMin = nums[0]"})]}),`
`,n.jsxs(e.li,{children:["遍历数组，计算 ",n.jsx(e.code,{children:"prevMin * nums[i]"})," 和 ",n.jsx(e.code,{children:"prevMax * nums[i]"})]}),`
`,n.jsxs(e.li,{children:["更新 ",n.jsx(e.code,{children:"prevMin = min(temp1, temp2, nums[i])"})]}),`
`,n.jsxs(e.li,{children:["更新 ",n.jsx(e.code,{children:"prevMax = max(temp1, temp2, nums[i])"})]}),`
`,n.jsx(e.li,{children:"记录全局最大值"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:c})]})}function p(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{p as default};
