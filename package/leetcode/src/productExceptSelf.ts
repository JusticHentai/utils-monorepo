export default function productExceptSelf(nums: number[]): number[] {
  const n = nums.length

  const output: number[] = [1]

  // 这样写 避开 nums[i] 本身 乘完左边
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1]
  }

  // 乘右边
  let right_output = 1
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right_output
    right_output *= nums[i]
  }

  return output
}
