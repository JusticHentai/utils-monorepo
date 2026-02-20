import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import canJump from '../../../../packages/learn-utils/src/leetcode/canJump'

const normalDemo = () => {
  const testCases = [
    { nums: [2, 3, 1, 1, 4], expected: true },
    { nums: [3, 2, 1, 0, 4], expected: false },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: canJump(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      case1: '可以先跳 1 步到索引 1，然后跳 3 步到达最后',
      case2: '无论怎样都会到达索引 3，但该位置最大跳跃长度是 0',
    },
  }
}

export default normalDemo
`,l=`export default function canJump(nums: number[]): boolean {
  const length = nums.length
  let rightmost = nums[0]

  for (let i = 1; i < length; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])

      if (rightmost >= length - 1) {
        return true
      }
    }
  }

  return false
}
`;function r(s){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"canjump-跳跃游戏",children:"canJump 跳跃游戏"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/jump-game/",rel:"nofollow",children:"LeetCode 55. 跳跃游戏"})," 是贪心算法的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个非负整数数组 nums，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"贪心算法",children:"贪心算法"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"维护能到达的最远位置 rightmost"}),`
`,n.jsx(e.li,{children:"遍历数组，更新 rightmost"}),`
`,n.jsx(e.li,{children:"如果当前位置超过 rightmost，说明无法到达"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/jump-game-ii/",rel:"nofollow",children:"跳跃游戏 II"})}),`
`]})]})}function x(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
