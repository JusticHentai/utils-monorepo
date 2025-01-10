export default function threeSum(nums: number[]): number[][] {
  const res: number[][] = []

  const length = nums.length

  if (!nums || length < 3) return res

  nums.sort((a, b) => a - b)

  for (let i = 0; i < length; i++) {
    // nums[i] > 0 后面也全是大于 0 的 可以直接排除
    if (nums[i] > 0) break

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let L = i + 1,
      R = length - 1

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]

      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])

        while (L < R && nums[L] === nums[L + 1]) L++ // 去重
        while (L < R && nums[R] === nums[R - 1]) R-- // 去重

        L++
        R--
      } else if (sum < 0) L++
      else if (sum > 0) R--
    }
  }

  return res
}
