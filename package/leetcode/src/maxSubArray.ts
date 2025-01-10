export default function maxSubArray(nums: number[]): number {
  let pre = 0
  let res = nums[0]

  for (const num of nums) {
    pre = Math.max(pre + num, num)
    res = Math.max(res, pre)
  }

  return res
}
