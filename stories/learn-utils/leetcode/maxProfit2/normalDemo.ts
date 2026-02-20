import maxProfit from '../../../../packages/learn-utils/src/leetcode/maxProfit2'

export default () => {
  const prices = [1, 2, 3, 0, 2]

  const result = maxProfit(prices)

  console.log('股票价格:', prices)
  console.log('最大利润 (含冷冻期):', result)
  console.log('交易: 买入->卖出->冷冻->买入->卖出')

  return result
}
