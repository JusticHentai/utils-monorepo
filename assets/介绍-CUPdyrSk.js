import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import maxSubArray from '../../../../packages/learn-utils/src/leetcode/maxSubArray'

const normalDemo = () => {
  const testCases = [
    { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { input: [1], expected: 1 },
    { input: [5, 4, -1, 7, 8], expected: 23 },
  ]

  const results = testCases.map(({ input, expected }) => ({
    input,
    output: maxSubArray(input),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      '[-2,1,-3,4,-1,2,1,-5,4]': '连续子数组 [4,-1,2,1] 的和最大，为 6',
    },
  }
}

export default normalDemo
`,d=`export default function maxSubArray(nums: number[]): number {
  let pre = 0
  let res = nums[0]

  for (const num of nums) {
    pre = Math.max(pre + num, num)
    res = Math.max(res, pre)
  }

  return res
}
`;function l(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"maxsubarray-最大子数组和",children:"maxSubArray 最大子数组和"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/maximum-subarray/",rel:"nofollow",children:"LeetCode 53. 最大子数组和"})," 是动态规划的入门经典题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个整数数组 ",n.jsx(e.code,{children:"nums"}),"，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。"]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"动态规划kadane-算法",children:"动态规划（Kadane 算法）"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态定义"}),"：",n.jsx(e.code,{children:"pre"})," 表示以当前元素结尾的最大子数组和"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态转移"}),"：",n.jsx(e.code,{children:"pre = max(pre + num, num)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"结果更新"}),"：每次更新全局最大值"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心思想",children:"核心思想"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"如果前面的和是负数，那么加上当前数只会更小"}),`
`,n.jsx(e.li,{children:"所以直接从当前数重新开始计算"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"nums",children:"nums"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number[]"})]}),`
`,n.jsx(e.li,{children:"描述：整数数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：最大子数组和"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)，一次遍历"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)，常数空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"状态转移图解",children:"状态转移图解"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`数组: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
pre:  [-2, 1, -2, 4,  3, 5, 6,  1, 5]
res:  [-2, 1,  1, 4,  4, 5, 6,  6, 6]
`})}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/maximum-product-subarray/",rel:"nofollow",children:"乘积最大子数组"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/maximum-sum-circular-subarray/",rel:"nofollow",children:"环形子数组的最大和"})}),`
`]})]})}function m(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(l,{...r})}):l(r)}export{m as default};
