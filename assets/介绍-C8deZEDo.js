import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import combinationSum from '../../../../packages/learn-utils/src/leetcode/combinationSum'

const normalDemo = () => {
  const candidates = [2, 3, 6, 7]
  const target = 7
  const result = combinationSum(candidates, target)

  return {
    candidates,
    target,
    output: result, // [[2,2,3], [7]]
    explanation: '2 + 2 + 3 = 7，7 = 7',
  }
}

export default normalDemo
`,c=`export default function (candidates: number[], target: number): number[][] {
  const ans: number[][] = []

  const dfs = (target: number, combine: number[], index: number) => {
    if (index === candidates.length) {
      return
    }

    if (target === 0) {
      ans.push(combine)

      return
    }

    // 下一个
    dfs(target, combine, index + 1)

    // 选择当前数
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combine, candidates[index]], index)
    }
  }

  dfs(target, [], 0)

  return ans
}
`;function r(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"combinationsum-组合总和",children:"combinationSum 组合总和"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/combination-sum/",rel:"nofollow",children:"LeetCode 39. 组合总和"})," 是回溯算法的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个无重复元素的整数数组 candidates 和一个目标整数 target，找出所有和为 target 的组合。candidates 中的数字可以无限制重复被选取。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"回溯--剪枝",children:"回溯 + 剪枝"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"递归选择"}),"：每个位置可以选择当前数或跳过"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"重复选取"}),"：选择当前数后，index 不变"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"剪枝"}),"：当 target < 0 时返回"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(S)，S 为所有可行解的长度之和"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(target)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/combination-sum-ii/",rel:"nofollow",children:"组合总和 II"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/combination-sum-iii/",rel:"nofollow",children:"组合总和 III"})}),`
`]})]})}function u(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{u as default};
