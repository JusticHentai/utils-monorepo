import maxProfit from '../../../../packages/learn-utils/src/leetcode/maxProfit'

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
