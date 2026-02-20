import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import climbStairs from '../../../../packages/learn-utils/src/leetcode/climbStairs'

const normalDemo = () => {
  const testCases = [2, 3, 4, 5, 10]

  const results = testCases.map((n) => ({
    input: n,
    output: climbStairs(n),
  }))

  return {
    testCases: results,
    explanation: {
      2: '两种方法：1+1 或 2',
      3: '三种方法：1+1+1、1+2、2+1',
    },
  }
}

export default normalDemo
`,d=`export default function climbStairs(n: number): number {
  const dp = new Array(n)
  dp[0] = 1
  dp[1] = 2

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n - 1]
}
`;function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"climbstairs-爬楼梯",children:"climbStairs 爬楼梯"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/climbing-stairs/",rel:"nofollow",children:"LeetCode 70. 爬楼梯"})," 是动态规划的入门题，本质是斐波那契数列。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"动态规划",children:"动态规划"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态定义"}),"：",n.jsx(e.code,{children:"dp[i]"})," 表示爬到第 i 阶的方法数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态转移"}),"：",n.jsx(e.code,{children:"dp[i] = dp[i-1] + dp[i-2]"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"初始状态"}),"：",n.jsx(e.code,{children:"dp[0] = 1, dp[1] = 2"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"为什么是斐波那契",children:"为什么是斐波那契？"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"到达第 i 阶，可以从第 i-1 阶爬 1 步，或从第 i-2 阶爬 2 步"}),`
`,n.jsx(e.li,{children:"所以方法数是两者之和"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"n",children:"n"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：楼梯阶数"}),`
`]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：爬到楼顶的方法数"}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，可优化为 O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"空间优化版本",children:"空间优化版本"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function climbStairs(n: number): number {
  if (n <= 2) return n
  let prev = 1, curr = 2
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr]
  }
  return curr
}
`})}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/min-cost-climbing-stairs/",rel:"nofollow",children:"使用最小花费爬楼梯"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/fibonacci-number/",rel:"nofollow",children:"斐波那契数"})}),`
`]})]})}function a(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{a as default};
