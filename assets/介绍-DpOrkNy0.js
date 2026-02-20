import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`export default function minMeetingRooms(intervals: number[][]): number {
  const start: number[] = []
  const end: number[] = []

  intervals.forEach((v) => {
    start.push(v[0])
    end.push(v[1])
  })

  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  let l = 0,
    r = 0,
    n = 0

  while (l < start.length) {
    end[r] > start[l] ? n++ : r++, l++
  }

  return n
}

const obj: Record<string, any> = {
  a: 1,
  b: true,
  c: 'hello',
}

function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key]
}

const val = getProperty(obj, 'c')
`,l=`import minMeetingRooms from '../../../../packages/learn-utils/src/leetcode/minMeetingRooms'

export default () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ]

  const result = minMeetingRooms(intervals)

  console.log('会议时间:', intervals)
  console.log('最少需要会议室数量:', result)

  return result
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"会议室-ii-leetcode-253",children:"会议室 II (LeetCode 253)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个会议时间安排的数组 ",n.jsx(e.code,{children:"intervals"}),"，每个会议时间都会包括开始和结束的时间 ",n.jsx(e.code,{children:"[start, end]"}),"，返回所需会议室的最小数量。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"排序 + 双指针"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将开始时间和结束时间分别排序"}),`
`,n.jsx(e.li,{children:"使用双指针遍历，统计同时进行的会议数"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"分离开始时间和结束时间，分别排序"}),`
`,n.jsx(e.li,{children:"双指针遍历，如果开始时间 < 结束时间，需要新会议室"}),`
`,n.jsx(e.li,{children:"否则可以复用已结束的会议室"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:l})]})}function u(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{u as default};
