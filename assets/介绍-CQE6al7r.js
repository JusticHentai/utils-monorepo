import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import findKthLargest from '../../../../packages/learn-utils/src/leetcode/findKthLargest'

const normalDemo = () => {
  const testCases = [
    { nums: [3, 2, 1, 5, 6, 4], k: 2, expected: 5 },
    { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, expected: 4 },
  ]

  const results = testCases.map(({ nums, k, expected }) => ({
    nums: [...nums],
    k,
    output: findKthLargest([...nums], k),
    expected,
  }))

  return {
    testCases: results,
    explanation: '找到数组中第 k 大的元素',
  }
}

export default normalDemo
`,a=`export default function findKthLargest(nums: number[], k: number): number {
  let heapSize = nums.length

  buildMaxHeap(nums, heapSize)

  // 取 k 在最顶 所以 + 1 少做一次
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    ;[nums[0], nums[i]] = [nums[i], nums[0]]

    // 下沉后 不在运算它
    --heapSize

    maxHeapify(nums, 0, heapSize)
  }

  return nums[0]
}

// 自下而上 构建大顶堆
function buildMaxHeap(nums: number[], heapSize: number) {
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(nums, i, heapSize)
  }
}

// 从左向右 自上而下调整节点
function maxHeapify(nums: number[], i: number, heapSize: number) {
  const l = i * 2 + 1
  const r = i * 2 + 2

  let largest = i

  // 父节点 i 与 左子节点比
  if (l < heapSize && nums[l] > nums[largest]) {
    largest = l
  }

  if (r < heapSize && nums[r] > nums[largest]) {
    largest = r
  }

  // 如果最大有变化 调整节点
  if (largest !== i) {
    ;[nums[largest], nums[i]] = [nums[i], nums[largest]]

    // 调整下一个 非叶子节点
    maxHeapify(nums, largest, heapSize)
  }
}
`;function r(s){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"findkthlargest-数组中的第k个最大元素",children:"findKthLargest 数组中的第K个最大元素"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/kth-largest-element-in-an-array/",rel:"nofollow",children:"LeetCode 215. 数组中的第K个最大元素"})," 是堆排序的经典应用。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"堆排序",children:"堆排序"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"构建大顶堆"}),`
`,n.jsx(e.li,{children:"依次取出堆顶元素 k-1 次"}),`
`,n.jsx(e.li,{children:"第 k 次堆顶即为答案"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n log n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"其他解法",children:"其他解法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"快速选择"}),"：平均 O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"小顶堆"}),"：维护 k 个元素的小顶堆"]}),`
`]})]})}function x(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
