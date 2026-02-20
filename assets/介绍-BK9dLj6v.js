import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import topKFrequent from '../../../../packages/learn-utils/src/leetcode/topKFrequent'

const normalDemo = () => {
  const testCases = [
    { nums: [1, 1, 1, 2, 2, 3], k: 2 },
    { nums: [1], k: 1 },
  ]

  const results = testCases.map(({ nums, k }) => ({
    nums,
    k,
    output: topKFrequent(nums, k),
  }))

  return {
    testCases: results,
    explanation: '返回出现频率前 k 高的元素',
  }
}

export default normalDemo
`,i=`export default function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map()

  nums.map((num: number) => {
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  })

  if (map.size <= k) {
    return [...map.keys()]
  }

  return bucketSort(map, k)
}

const bucketSort = (map: Map<number, number>, k: number): number[] => {
  const arr: number[][] = [],
    res = []

  map.forEach((value: number, key: number) => {
    // 根据频率分配到不同桶里
    if (!arr[value]) {
      arr[value] = [key]
    } else {
      arr[value].push(key)
    }
  })

  // 倒序遍历获取 频率最大的 k 的个数
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i])
    }
  }

  return res
}
`;function t(r){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"topkfrequent-前-k-个高频元素",children:"topKFrequent 前 K 个高频元素"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/top-k-frequent-elements/",rel:"nofollow",children:"LeetCode 347. 前 K 个高频元素"})," 是哈希表 + 排序的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个整数数组 nums 和一个整数 k，请你返回其中出现频率前 k 高的元素。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"桶排序",children:"桶排序"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"统计每个元素的频率"}),`
`,n.jsx(e.li,{children:"按频率分桶"}),`
`,n.jsx(e.li,{children:"从高频桶开始取 k 个元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"其他解法",children:"其他解法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"小顶堆"}),"：O(n log k)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"快速选择"}),"：O(n) 平均"]}),`
`]})]})}function p(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{p as default};
