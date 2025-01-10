export default function canJump(nums: number[]): boolean {
  const length = nums.length
  let rightmost = nums[0]

  for (let i = 1; i < length; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])

      if (rightmost >= length - 1) {
        return true
      }
    }
  }

  return false
}
