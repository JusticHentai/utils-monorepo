import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import threeSum from '../../../../packages/learn-utils/src/leetcode/threeSum'

const normalDemo = () => {
  const nums = [-1, 0, 1, 2, -1, -4]
  const result = threeSum(nums)

  return {
    input: nums,
    output: result, // [[-1, -1, 2], [-1, 0, 1]]
    explanation: '三元组和为0的组合',
  }
}

export default normalDemo
`,h=`export default function threeSum(nums: number[]): number[][] {
  const res: number[][] = []

  const length = nums.length

  if (!nums || length < 3) return res

  nums.sort((a, b) => a - b)

  for (let i = 0; i < length; i++) {
    // nums[i] > 0 后面也全是大于 0 的 可以直接排除
    if (nums[i] > 0) break

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let L = i + 1,
      R = length - 1

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]

      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])

        while (L < R && nums[L] === nums[L + 1]) L++ // 去重
        while (L < R && nums[R] === nums[R - 1]) R-- // 去重

        L++
        R--
      } else if (sum < 0) L++
      else if (sum > 0) R--
    }
  }

  return res
}
`;function l(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"threesum-三数之和",children:"threeSum 三数之和"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/3sum/",rel:"nofollow",children:"LeetCode 15. 三数之和"})," 是双指针的经典应用题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给你一个包含 n 个整数的数组 ",n.jsx(e.code,{children:"nums"}),"，判断 ",n.jsx(e.code,{children:"nums"})," 中是否存在三个元素 a，b，c，使得 a + b + c = 0。找出所有和为 0 且不重复的三元组。"]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"排序--双指针",children:"排序 + 双指针"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"排序"}),"：先对数组排序"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"固定一个数"}),"：遍历数组，固定第一个数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"双指针"}),"：在剩余部分使用双指针找另外两个数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"去重"}),"：跳过重复元素"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"nums",children:"nums"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number[]"})]}),`
`,n.jsx(e.li,{children:"描述：整数数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number[][]"})]}),`
`,n.jsx(e.li,{children:"描述：所有和为 0 的三元组"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n²)，排序 O(n log n) + 双指针 O(n²)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(log n)，排序所需空间"]}),`
`]}),`
`,n.jsx(e.h2,{id:"关键点",children:"关键点"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"排序的作用"}),"：方便去重和双指针移动"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"剪枝优化"}),"：当 ",n.jsx(e.code,{children:"nums[i] > 0"})," 时可以直接退出"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"去重处理"}),"：跳过相同的元素避免重复结果"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/two-sum/",rel:"nofollow",children:"两数之和"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/4sum/",rel:"nofollow",children:"四数之和"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/3sum-closest/",rel:"nofollow",children:"最接近的三数之和"})}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{j as default};
