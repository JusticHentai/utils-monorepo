export default function sortColors(nums: number[]): void {
  const n = nums.length
  let p0 = 0,
    p1 = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      ;[nums[i], nums[p1]] = [nums[p1], nums[i]]

      p1++
    } else if (nums[i] === 0) {
      ;[nums[i], nums[p0]] = [nums[p0], nums[i]]

      // 说明 p0 所在的是 1 给 p1 也流转下
      if (p0 < p1) {
        ;[nums[i], nums[p1]] = [nums[p1], nums[i]]
      }

      ++p0
      ++p1
    }
  }
}
