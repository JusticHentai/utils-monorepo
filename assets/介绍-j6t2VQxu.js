import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`/**
 * 寻找两个正序数组的中位数
 */
export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  const m = nums1.length
  const n = nums2.length

  const totalLeft = Math.floor((m + n + 1) / 2)

  let left = 0,
    right = m

  while (left < right) {
    // i 找 0 到 m 中间点 j 自动获得
    const i = left + Math.floor((right - left + 1) / 2)
    const j = totalLeft - i

    if (nums1[i - 1] > nums2[j]) {
      // i 位置太大了 找左边
      right = i - 1
    } else {
      // i 位置刚刚好 往右边找
      left = i
    }
  }

  // 超过边界只有贴近时 往 差 12 看看就知道二分出来的边界

  const nums1Index = left
  const nums2Index = totalLeft - nums1Index

  // 其实就是找 中位数
  const nums1LeftMax =
    nums1Index === 0 ? -Number.MAX_VALUE : nums1[nums1Index - 1]
  const nums1RightMin = nums1Index === m ? Number.MAX_VALUE : nums1[nums1Index]

  const nums2LeftMax =
    nums2Index === 0 ? -Number.MAX_VALUE : nums2[nums2Index - 1]
  const nums2RightMin = nums2Index === n ? Number.MAX_VALUE : nums2[nums2Index]

  if ((m + n) % 2 === 1) {
    return Math.max(nums1LeftMax, nums2LeftMax)
  } else {
    return (
      (Math.max(nums1LeftMax, nums2LeftMax) +
        Math.min(nums1RightMin, nums2RightMin)) /
      2
    )
  }
}
`,m=`import findMedianSortedArrays from '../../../../packages/learn-utils/src/leetcode/findMedianSortedArrays'

export default () => {
  const nums1 = [1, 3]
  const nums2 = [2]

  const result = findMedianSortedArrays(nums1, nums2)

  console.log('数组1:', nums1)
  console.log('数组2:', nums2)
  console.log('中位数:', result)

  return result
}
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"寻找两个正序数组的中位数-leetcode-4",children:"寻找两个正序数组的中位数 (LeetCode 4)"}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(s.p,{children:["给定两个大小分别为 ",n.jsx(s.code,{children:"m"})," 和 ",n.jsx(s.code,{children:"n"})," 的正序（从小到大）数组 ",n.jsx(s.code,{children:"nums1"})," 和 ",n.jsx(s.code,{children:"nums2"}),"。请你找出并返回这两个正序数组的中位数。算法的时间复杂度应该为 O(log(m+n))。"]}),`
`,n.jsx(s.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"二分查找"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"在较短数组上进行二分查找"}),`
`,n.jsx(s.li,{children:"找到一个分割点，使得左半部分的最大值小于等于右半部分的最小值"}),`
`]}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsx(s.li,{children:"确保 nums1 是较短的数组"}),`
`,n.jsx(s.li,{children:"在 nums1 上二分查找分割点 i，nums2 的分割点 j 自动确定"}),`
`,n.jsxs(s.li,{children:["调整分割点直到满足：",n.jsx(s.code,{children:"nums1[i-1] <= nums2[j]"})," 且 ",n.jsx(s.code,{children:"nums2[j-1] <= nums1[i]"})]}),`
`,n.jsx(s.li,{children:"根据总长度奇偶性计算中位数"}),`
`]}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(log(min(m, n)))"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(t,{language:"typescript",children:m})]})}function j(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
