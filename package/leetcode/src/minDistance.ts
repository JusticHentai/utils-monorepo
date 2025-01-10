export default function minDistance(word1: string, word2: string): number {
  const n = word1.length
  const m = word2.length

  // 有空
  if (m * n === 0) {
    return m + n
  }

  // 为了好看一般 从 1 开始
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0))

  // 初始化 word2 为空 需要 删除几次
  for (let i = 1; i <= n; i++) {
    dp[i][0] = i
  }

  // 初始化 word1 为空 需要 增加几次
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        )
      }
    }
  }

  return dp[n][m]
}
