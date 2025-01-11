/**
 * 数组中重复的数字
 * https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/?favorite=xb9nqhhg
 */
export default function findRepeatNumber(nums: number[]): number | null {
  const hashMap: Record<string, boolean> = {}

  for (const item of nums) {
    if (hashMap[item]) {
      return item
    }

    hashMap[item] = true
  }

  return null
}
