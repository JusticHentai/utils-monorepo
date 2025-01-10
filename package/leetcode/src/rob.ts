export default function rob(nums: number[]): number {
  const length = nums.length

  if (!length) {
    return 0
  }

  const dp = new Array(length)

  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])

  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[length - 1]
}
