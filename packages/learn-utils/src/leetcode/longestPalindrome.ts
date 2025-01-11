/**
 * 最长回文子串
 */
export default function longestPalindrome(s: string): string {
  const length = s.length

  let res = ''

  const dp = Array.from(new Array(length), () => new Array(length).fill(0))

  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
      dp[i][j] = s[i] === s[j] && (j - i + 1 < 3 || dp[i + 1][j - 1])

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }

  return res
}
