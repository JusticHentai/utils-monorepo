import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import twoSum from '../../../../packages/learn-utils/src/leetcode/twoSum'

const normalDemo = () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  const result = twoSum(nums, target)

  return {
    input: { nums, target },
    output: result, // [0, 1]
    explanation: 'nums[0] + nums[1] = 2 + 7 = 9',
  }
}

export default normalDemo
`,d=`import twoSum from '../../../../packages/learn-utils/src/leetcode/twoSum'

const anotherDemo = () => {
  const nums = [3, 2, 4]
  const target = 6

  const result = twoSum(nums, target)

  return {
    input: { nums, target },
    output: result, // [1, 2]
    explanation: 'nums[1] + nums[2] = 2 + 4 = 6',
  }
}

export default anotherDemo
`,c=`/**
 * 两数之和 https://leetcode.cn/problems/two-sum/?favorite=2cktkvj
 * @param nums
 * @param target
 */
export default function twoSum(
  nums: number[],
  target: number
): [number, number] | [] {
  const hashMap: Record<number, number> = {}

  for (let i = 0, length = nums.length; i < length; i++) {
    const diff = target - nums[i]

    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i]
    }

    hashMap[nums[i]] = i
  }

  return []
}
`;function t(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"twosum-两数之和",children:"twoSum 两数之和"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/two-sum/",rel:"nofollow",children:"LeetCode 1. 两数之和"})," 是 LeetCode 第一题，也是面试中最常见的算法题之一。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个整数数组 ",n.jsx(e.code,{children:"nums"})," 和一个整数目标值 ",n.jsx(e.code,{children:"target"}),"，请你在该数组中找出和为目标值 ",n.jsx(e.code,{children:"target"})," 的那两个整数，并返回它们的数组下标。"]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"哈希表解法最优",children:"哈希表解法（最优）"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心思想"}),"：遍历数组，对于每个元素，检查 ",n.jsx(e.code,{children:"target - nums[i]"})," 是否在哈希表中"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)，只需一次遍历"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，哈希表存储"]}),`
`]}),`
`,n.jsx(e.h3,{id:"暴力解法",children:"暴力解法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"两层循环，枚举所有组合"}),`
`,n.jsx(e.li,{children:"时间复杂度 O(n²)，不推荐"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"示例1",children:"示例1"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例2",children:"示例2"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"nums",children:"nums"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number[]"})]}),`
`,n.jsx(e.li,{children:"描述：整数数组"}),`
`]}),`
`,n.jsx(e.h3,{id:"target",children:"target"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：目标和"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"[number, number] | []"})]}),`
`,n.jsx(e.li,{children:"描述：两个数的索引，找不到返回空数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法"}),n.jsx("th",{children:"时间复杂度"}),n.jsx("th",{children:"空间复杂度"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"哈希表"}),n.jsx("td",{children:"O(n)"}),n.jsx("td",{children:"O(n)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"暴力法"}),n.jsx("td",{children:"O(n²)"}),n.jsx("td",{children:"O(1)"})]})]})]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/3sum/",rel:"nofollow",children:"三数之和"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/4sum/",rel:"nofollow",children:"四数之和"})}),`
`]})]})}function a(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{a as default};
