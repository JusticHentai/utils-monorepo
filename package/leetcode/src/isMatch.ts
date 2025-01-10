/**
 * 正则表达式匹配
 */
export default function isMatch(s: string, p: string): boolean {
  const sLength = s.length,
    pLength = p.length

  const dp = Array.from(new Array(sLength + 1), () =>
    new Array(pLength + 1).fill(false)
  )

  // 边界条件
  dp[0][0] = true

  for (let j = 1; j < pLength + 1; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }

  // 正常情况
  for (let i = 1; i < sLength + 1; i++) {
    for (let j = 1; j < pLength + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[sLength][pLength]
}
