export default function majorityElement(nums: number[]): number {
  const half = nums.length / 2

  const hash: Record<string, number> = {}

  for (const num of nums) {
    hash[num] = (hash[num] || 0) + 1

    if (hash[num] > half) return num
  }
}
