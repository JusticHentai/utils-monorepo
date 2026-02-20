import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`export default function maxProfit(prices: number[]): number {
  const n = prices.length

  if (!n) {
    return 0
  }

  const hold = new Array(n)
  const unhold = new Array(n)

  hold[0] = -prices[0]
  unhold[0] = 0
  hold[1] = Math.max(hold[0], -prices[1])
  unhold[1] = Math.max(unhold[0], hold[0] + prices[1])

  for (let i = 2; i < n; i++) {
    hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i])
    unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i])
  }

  return unhold[n - 1]
}

export function maxProfit2(prices: number[]): number {
  let rest = 0
  let sold = 0
  let hold = -Infinity

  for (const price of prices) {
    const preSold = sold
    const preHold = hold

    hold = Math.max(preHold, rest - price)
    sold = preHold + price
    rest = Math.max(rest, preSold)
  }

  return Math.max(rest, sold)
}
`,d=`import maxProfit from '../../../../packages/learn-utils/src/leetcode/maxProfit2'

export default () => {
  const prices = [1, 2, 3, 0, 2]

  const result = maxProfit(prices)

  console.log('股票价格:', prices)
  console.log('最大利润 (含冷冻期):', result)
  console.log('交易: 买入->卖出->冷冻->买入->卖出')

  return result
}
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"买卖股票的最佳时机含冷冻期-leetcode-309",children:"买卖股票的最佳时机含冷冻期 (LeetCode 309)"}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsxs(e.p,{children:["给定一个整数数组 ",n.jsx(e.code,{children:"prices"}),"，其中 ",n.jsx(e.code,{children:"prices[i]"})," 表示第 ",n.jsx(e.code,{children:"i"})," 天的股票价格。设计一个算法计算出最大利润。卖出股票后，你无法在第二天买入股票（即冷冻期为 1 天）。"]}),`
`,n.jsx(e.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"状态机 DP"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hold[i]"}),"：第 i 天持有股票的最大利润"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unhold[i]"}),"：第 i 天不持有股票的最大利润"]}),`
`,n.jsx(e.li,{children:"考虑冷冻期的影响"}),`
`]}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"hold[i] = max(hold[i-1], unhold[i-2] - prices[i])"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"unhold[i] = max(unhold[i-1], hold[i-1] + prices[i])"})}),`
`,n.jsxs(e.li,{children:["返回 ",n.jsx(e.code,{children:"unhold[n-1]"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(n)，可优化为 O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(o,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"示例代码",children:"示例代码"}),`
`,n.jsx(o,{language:"typescript",children:d})]})}function a(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{a as default};
