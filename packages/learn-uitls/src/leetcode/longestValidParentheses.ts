export default function longestValidParentheses(s: string): number {
  let maxLength = 0
  const length = s.length

  const dp = new Array(length).fill(0)

  for (let i = 1; i < length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2
        } else {
          dp[i] = 2
        }
      } else if (s[i - dp[i - 1] - 1] === '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
        } else {
          dp[i] = dp[i - 1] + 2
        }
      }
    }

    maxLength = Math.max(maxLength, dp[i])
  }

  return maxLength
}
