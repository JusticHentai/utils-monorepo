export default function maximalSquare(matrix: string[][]): number {
  if (!matrix.length) {
    return 0
  }

  const m = matrix.length
  const n = matrix[0].length

  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))

  let max = 0

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }

  return max * max
}
