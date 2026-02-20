import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length

  for (const num of nums) {
    const x = (num - 1) % n

    nums[x] += n
  }

  const res = []

  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      res.push(i + 1)
    }
  }

  return res
}
`,d=`// findDisappearedNumbers 未导出，这里展示算法思路
export default () => {
  const nums = [4, 3, 2, 7, 8, 2, 3, 1]

  // 原地标记法
  const n = nums.length
  for (const num of nums) {
    const x = (num - 1) % n
    nums[x] += n
  }

  const res = []
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      res.push(i + 1)
    }
  }

  console.log('输入数组:', [4, 3, 2, 7, 8, 2, 3, 1])
  console.log('消失的数字:', res)

  return res
}
`;function o(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"找到所有数组中消失的数字-leetcode-448",children:"找到所有数组中消失的数字 (LeetCode 448)"}),`
`,n.jsx(s.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(s.p,{children:["给你一个含 ",n.jsx(s.code,{children:"n"})," 个整数的数组 ",n.jsx(s.code,{children:"nums"}),"，其中 ",n.jsx(s.code,{children:"nums[i]"})," 在区间 ",n.jsx(s.code,{children:"[1, n]"})," 内。请你找出所有在 ",n.jsx(s.code,{children:"[1, n]"})," 范围内但没有出现在 ",n.jsx(s.code,{children:"nums"})," 中的数字，并以数组的形式返回结果。"]}),`
`,n.jsx(s.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"原地标记法"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"利用数组下标作为哈希表"}),`
`,n.jsx(s.li,{children:"遍历数组，将出现的数字对应下标的值加 n"}),`
`,n.jsx(s.li,{children:"最后值小于等于 n 的下标就是消失的数字"}),`
`]}),`
`,n.jsx(s.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:["遍历数组，对于每个数 ",n.jsx(s.code,{children:"num"}),"，将 ",n.jsx(s.code,{children:"nums[(num-1) % n]"})," 加上 ",n.jsx(s.code,{children:"n"})]}),`
`,n.jsxs(s.li,{children:["再次遍历，如果 ",n.jsx(s.code,{children:"nums[i] <= n"}),"，说明 ",n.jsx(s.code,{children:"i+1"})," 没有出现过"]}),`
`]}),`
`,n.jsx(s.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空间复杂度"}),"：O(1)，不算返回数组"]}),`
`]}),`
`,n.jsx(s.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(r,{language:"typescript",children:d})]})}function j(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(o,{...e})}):o(e)}export{j as default};
