import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import productExceptSelf from '../../../../packages/learn-utils/src/leetcode/productExceptSelf'

const normalDemo = () => {
  const nums = [1, 2, 3, 4]
  const result = productExceptSelf(nums)

  return {
    input: nums,
    output: result, // [24, 12, 8, 6]
    explanation: '每个位置的值是除自身外其他元素的乘积',
  }
}

export default normalDemo
`,l=`export default function productExceptSelf(nums: number[]): number[] {
  const n = nums.length

  const output: number[] = [1]

  // 这样写 避开 nums[i] 本身 乘完左边
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1]
  }

  // 乘右边
  let right_output = 1
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right_output
    right_output *= nums[i]
  }

  return output
}
`;function o(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"productexceptself-除自身以外数组的乘积",children:"productExceptSelf 除自身以外数组的乘积"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.a,{href:"https://leetcode.cn/problems/product-of-array-except-self/",rel:"nofollow",children:"LeetCode 238. 除自身以外数组的乘积"})," 是前缀积的经典题目。"]}),`
`,n.jsx(t.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(t.p,{children:"给你一个整数数组 nums，返回数组 answer，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。不能使用除法。"}),`
`,n.jsx(t.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(t.h3,{id:"左右乘积",children:"左右乘积"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsx(t.li,{children:"先计算每个位置左边所有元素的乘积"}),`
`,n.jsx(t.li,{children:"再从右往左乘以右边所有元素的乘积"}),`
`]}),`
`,n.jsx(t.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(t.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(t.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"空间复杂度"}),"：O(1)（不算输出数组）"]}),`
`]})]})}function x(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{x as default};
