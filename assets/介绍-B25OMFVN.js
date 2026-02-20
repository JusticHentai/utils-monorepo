import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import subsets from '../../../../packages/learn-utils/src/leetcode/subsets'

const normalDemo = () => {
  const nums = [1, 2, 3]
  const result = subsets(nums)

  return {
    input: nums,
    output: result,
    count: result.length, // 8 = 2^3
    explanation: '包括空集和自身的所有子集',
  }
}

export default normalDemo
`,o=`export default function subsets(nums: number[]): number[][] {
  const res: number[][] = []

  const dfs = (index: number, list: number[]) => {
    if (index === nums.length) {
      res.push(list.slice())

      return
    }

    list.push(nums[index])
    dfs(index + 1, list)

    list.pop()
    dfs(index + 1, list)
  }

  dfs(0, [])
  return res
}
`;function r(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"subsets-子集",children:"subsets 子集"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.a,{href:"https://leetcode.cn/problems/subsets/",rel:"nofollow",children:"LeetCode 78. 子集"})," 是回溯算法的经典题目。"]}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(s.p,{children:"给你一个整数数组 nums，数组中的元素互不相同。返回该数组所有可能的子集。"}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(s.h3,{id:"dfs-选或不选",children:"DFS 选或不选"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"对于每个元素，有两种选择：选或不选"}),`
`,n.jsx(s.li,{children:"递归处理所有元素"}),`
`,n.jsx(s.li,{children:"到达末尾时记录当前组合"}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(n × 2^n)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(s.h2,{id:"子集数量",children:"子集数量"}),`
`,n.jsx(s.p,{children:"n 个元素的子集数量为 2^n"})]})}function p(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{p as default};
