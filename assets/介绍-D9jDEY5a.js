import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import maxProfit from '../../../../packages/learn-utils/src/leetcode/maxProfit'

const normalDemo = () => {
  const testCases = [
    { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
    { prices: [7, 6, 4, 3, 1], expected: 0 },
  ]

  const results = testCases.map(({ prices, expected }) => ({
    prices,
    output: maxProfit(prices),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      case1: '在第 2 天买入（价格 = 1），在第 5 天卖出（价格 = 6），利润 = 5',
      case2: '价格一直下跌，无法获利',
    },
  }
}

export default normalDemo
`,c=`export default function maxProfit(prices: number[]): number {
  let min_price = Infinity
  let max_profit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min_price) {
      min_price = prices[i]
    } else if (prices[i] - min_price > max_profit) {
      max_profit = prices[i] - min_price
    }
  }

  return max_profit
}
`;function s(i){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"maxprofit-买卖股票的最佳时机",children:"maxProfit 买卖股票的最佳时机"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",rel:"nofollow",children:"LeetCode 121. 买卖股票的最佳时机"})," 是动态规划的入门题。"]}),`
`,n.jsx(e.h2,{id:"题目描述",children:"题目描述"}),`
`,n.jsx(e.p,{children:"给定一个数组 prices，它的第 i 个元素表示一支给定股票第 i 天的价格。你只能选择某一天买入并在未来某一天卖出。返回你能获得的最大利润。"}),`
`,n.jsx(e.h2,{id:"解题思路",children:"解题思路"}),`
`,n.jsx(e.h3,{id:"一次遍历",children:"一次遍历"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"记录历史最低价格"}),`
`,n.jsx(e.li,{children:"计算当前价格与最低价的差值"}),`
`,n.jsx(e.li,{children:"更新最大利润"}),`
`]}),`
`,n.jsx(e.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"复杂度分析",children:"复杂度分析"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"时间复杂度"}),"：O(n)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"空间复杂度"}),"：O(1)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"相关题目",children:"相关题目"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/",rel:"nofollow",children:"买卖股票的最佳时机 II"})}),`
`]})]})}function a(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{a as default};
