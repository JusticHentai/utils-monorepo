/**
 * 两数之和 https://leetcode.cn/problems/two-sum/?favorite=2cktkvj
 * @param nums
 * @param target
 */
export default function twoSum(
  nums: number[],
  target: number
): [number, number] | [] {
  const hashMap: Record<number, number> = {}

  for (let i = 0, length = nums.length; i < length; i++) {
    const diff = target - nums[i]

    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i]
    }

    hashMap[nums[i]] = i
  }

  return []
}
