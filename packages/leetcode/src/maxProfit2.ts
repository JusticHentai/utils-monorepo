export default function maxProfit(prices: number[]): number {
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
