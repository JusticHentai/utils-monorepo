import coinChange from '../../../../packages/learn-utils/src/leetcode/coinChange'

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
