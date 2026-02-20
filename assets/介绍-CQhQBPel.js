import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import coinChange from '../../../../packages/learn-utils/src/leetcode/coinChange'

const normalDemo = () => {
  const testCases = [
    { coins: [1, 2, 5], amount: 11 },
    { coins: [2], amount: 3 },
    { coins: [1], amount: 0 },
  ]

  const results = testCases.map(({ coins, amount }) => ({
    coins,
    amount,
    output: coinChange(coins, amount),
  }))

  return {
    testCases: results,
    explanation: {
      '11': '11 = 5 + 5 + 1，最少需要 3 枚硬币',
      '3': '无法凑成，返回 -1',
      '0': '金额为 0，需要 0 枚硬币',
    },
  }
}

export default normalDemo
`,r=`export default function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity)

  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
`;function s(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"coinchange-零钱兑换",children:"coinChange 零钱兑换"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/coin-change/",rel:"nofollow",children:"LeetCode 322. 零钱兑换"})," 是动态规划的经典题目。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给你一个整数数组 coins 表示不同面额的硬币，以及一个整数 amount 表示总金额。计算凑成总金额所需的最少硬币个数。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"动态规划",children:"动态规划"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态定义"}),"：",n.jsx(e.code,{children:"dp[i]"})," 表示凑成金额 i 所需的最少硬币数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"状态转移"}),"：",n.jsx(e.code,{children:"dp[i] = min(dp[i], dp[i - coin] + 1)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"初始状态"}),"：",n.jsx(e.code,{children:"dp[0] = 0"}),"，其他为 Infinity"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(i,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(amount × n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(amount)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/coin-change-2/",rel:"nofollow",children:"零钱兑换 II"})}),`
`]})]})}function x(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{x as default};
