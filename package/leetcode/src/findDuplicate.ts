export default function findDuplicate(nums: number[]): number {
  let slow = 0,
    fast = 0

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  fast = 0

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}
