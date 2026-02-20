import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function longestConsecutive(nums: number[]): number {
  const num_set: Set<number> = new Set()

  for (const num of nums) {
    num_set.add(num)
  }

  let longestStreak = 0

  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1

      while (num_set.has(currentNum + 1)) {
        currentNum += 1
        currentStreak += 1
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}
`,c=`import longestConsecutive from '../../../../packages/learn-utils/src/leetcode/longestConsecutive'

export default () => {
  const nums = [100, 4, 200, 1, 3, 2]

  const result = longestConsecutive(nums)

  console.log('输入数组:', nums)
  console.log('最长连续序列长度:', result)
  console.log('连续序列: [1, 2, 3, 4]')

  return result
}
`;function r(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"最长连续序列-leetcode-128",children:"最长连续序列 (LeetCode 128)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个未排序的整数数组 ",n.jsx(e.code,{children:"nums"}),"，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。请你设计并实现时间复杂度为 O(n) 的算法解决此问题。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"哈希表"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用 Set 存储所有数字"}),`
`,n.jsx(e.li,{children:"只从连续序列的起点开始计数"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"将所有数字存入 Set"}),`
`,n.jsxs(e.li,{children:["遍历 Set，对于每个数字 ",n.jsx(e.code,{children:"num"})]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"num - 1"})," 不在 Set 中，说明 ",n.jsx(e.code,{children:"num"})," 是序列起点"]}),`
`,n.jsx(e.li,{children:"从起点开始向后计数连续数字"}),`
`,n.jsx(e.li,{children:"更新最长序列长度"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:c})]})}function j(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
