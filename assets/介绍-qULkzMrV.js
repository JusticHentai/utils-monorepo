import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import permute from '../../../../packages/learn-utils/src/leetcode/permute'

const normalDemo = () => {
  const nums = [1, 2, 3]
  const result = permute(nums)

  return {
    input: nums,
    output: result,
    count: result.length, // 6
    explanation: '3! = 6 种全排列',
  }
}

export default normalDemo
`,c=`export default function permute(nums: number[]): number[][] {
  const length = nums.length
  const res: number[][] = []

  const backtrack = (current: number[], target: number[]) => {
    if (current.length === length) {
      res.push(current)
    }

    for (let i = 0; i < target.length; i++) {
      const temp = [...target]

      temp.splice(i, 1)

      backtrack(current.concat(target[i]), temp)
    }
  }

  backtrack([], nums)

  return res
}
`;function s(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"permute-全排列",children:"permute 全排列"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/permutations/",rel:"nofollow",children:"LeetCode 46. 全排列"})," 是回溯算法的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个不含重复数字的数组 nums，返回其所有可能的全排列。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"回溯法",children:"回溯法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"每次从剩余元素中选择一个"}),`
`,n.jsx(e.li,{children:"递归处理剩余元素"}),`
`,n.jsx(e.li,{children:"回溯时恢复状态"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n × n!)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/permutations-ii/",rel:"nofollow",children:"全排列 II"}),"（包含重复数字）"]}),`
`]})]})}function a(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
