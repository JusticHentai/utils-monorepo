import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`export default function mergeArray(
  A: number[],
  m: number,
  B: number[],
  n: number
): void {
  let pa = m - 1,
    pb = n - 1
  let tail = m + n - 1

  let cur
  while (pa >= 0 || pb >= 0) {
    if (pa === -1) {
      cur = B[pb--]
    } else if (pb === -1) {
      cur = A[pa--]
    } else if (A[pa] > B[pb]) {
      cur = A[pa--]
    } else {
      cur = B[pb--]
    }

    A[tail--] = cur
  }
}
`,d=`import mergeArray from '../../../../packages/learn-utils/src/leetcode/mergeArray'

export default () => {
  const A = [1, 2, 3, 0, 0, 0]
  const m = 3
  const B = [2, 5, 6]
  const n = 3

  mergeArray(A, m, B, n)

  console.log('合并后的数组:', A)

  return A
}
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"合并两个有序数组-leetcode-88",children:"合并两个有序数组 (LeetCode 88)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你两个按非递减顺序排列的整数数组 ",n.jsx(e.code,{children:"nums1"})," 和 ",n.jsx(e.code,{children:"nums2"}),"，另有两个整数 ",n.jsx(e.code,{children:"m"})," 和 ",n.jsx(e.code,{children:"n"}),"，分别表示 ",n.jsx(e.code,{children:"nums1"})," 和 ",n.jsx(e.code,{children:"nums2"})," 中的元素数目。请你合并 ",n.jsx(e.code,{children:"nums2"})," 到 ",n.jsx(e.code,{children:"nums1"})," 中，使合并后的数组同样按非递减顺序排列。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"双指针（从后往前）"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"从两个数组的末尾开始比较"}),`
`,n.jsx(e.li,{children:"将较大的元素放到 nums1 的末尾"}),`
`,n.jsx(e.li,{children:"避免覆盖未处理的元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"指针 pa 指向 nums1 有效元素末尾，pb 指向 nums2 末尾"}),`
`,n.jsx(e.li,{children:"指针 tail 指向 nums1 数组末尾"}),`
`,n.jsx(e.li,{children:"比较 nums1[pa] 和 nums2[pb]，将较大者放到 tail 位置"}),`
`,n.jsx(e.li,{children:"移动相应指针"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(m + n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(s,{language:"typescript",children:d})]})}function j(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{j as default};
