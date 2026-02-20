import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import singleNumber from '../../../../packages/learn-utils/src/leetcode/singleNumber'

const normalDemo = () => {
  const testCases = [
    { nums: [2, 2, 1], expected: 1 },
    { nums: [4, 1, 2, 1, 2], expected: 4 },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: singleNumber(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: '使用异或运算，相同的数异或为 0',
  }
}

export default normalDemo
`,o=`export default function singleNumber(nums: number[]): number {
  let res = 0

  for (const num of nums) {
    res ^= num
  }

  return res
}
`;function l(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"singlenumber-只出现一次的数字",children:"singleNumber 只出现一次的数字"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/single-number/",rel:"nofollow",children:"LeetCode 136. 只出现一次的数字"})," 是位运算的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"异或运算",children:"异或运算"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"a ^ a = 0"}),"：相同的数异或为 0"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"a ^ 0 = a"}),"：任何数与 0 异或等于自身"]}),`
`,n.jsx(e.li,{children:"异或满足交换律和结合律"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/single-number-ii/",rel:"nofollow",children:"只出现一次的数字 II"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/single-number-iii/",rel:"nofollow",children:"只出现一次的数字 III"})}),`
`]})]})}function a(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{a as default};
