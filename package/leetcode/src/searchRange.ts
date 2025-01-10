export default function searchRange(nums: number[], target: number): number[] {
  const ans = [-1, -1]

  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false) - 1

  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    return [leftIndex, rightIndex]
  }

  return ans
}

function binarySearch(nums: number[], target: number, lower: boolean): number {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }

  return ans
}
