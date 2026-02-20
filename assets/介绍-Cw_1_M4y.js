import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import merge from '../../../../packages/learn-utils/src/leetcode/merge'

const normalDemo = () => {
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
  const result = merge([...intervals.map(i => [...i])])

  return {
    input: intervals,
    output: result, // [[1,6],[8,10],[15,18]]
    explanation: '区间 [1,3] 和 [2,6] 重叠，合并为 [1,6]',
  }
}

export default normalDemo
`,o=`export default function merge(intervals: number[][]): number[][] {
  const res = []
  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]

    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1])
    } else {
      res.push(prev)
      prev = cur
    }
  }

  res.push(prev)

  return res
}
`;function t(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"merge-合并区间",children:"merge 合并区间"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/merge-intervals/",rel:"nofollow",children:"LeetCode 56. 合并区间"})," 是区间问题的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]。请你合并所有重叠的区间，并返回一个不重叠的区间数组。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"排序--合并",children:"排序 + 合并"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"按区间起点排序"}),`
`,n.jsx(e.li,{children:"遍历区间，判断是否与前一个重叠"}),`
`,n.jsx(e.li,{children:"重叠则合并，否则加入结果"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(log n)"]}),`
`]})]})}function u(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{u as default};
