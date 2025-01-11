export default function maxProfit(prices: number[]): number {
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
