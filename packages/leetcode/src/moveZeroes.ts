export default function moveZeroes(nums: number[]): void {
  const n = nums.length

  let left = 0,
    right = 0
  while (right < n) {
    if (nums[right]) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]

      left++
    }

    right++
  }
}
