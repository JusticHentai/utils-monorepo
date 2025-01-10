/**
 * 寻找两个正序数组的中位数
 */
export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  const m = nums1.length
  const n = nums2.length

  const totalLeft = Math.floor((m + n + 1) / 2)

  let left = 0,
    right = m

  while (left < right) {
    // i 找 0 到 m 中间点 j 自动获得
    const i = left + Math.floor((right - left + 1) / 2)
    const j = totalLeft - i

    if (nums1[i - 1] > nums2[j]) {
      // i 位置太大了 找左边
      right = i - 1
    } else {
      // i 位置刚刚好 往右边找
      left = i
    }
  }

  // 超过边界只有贴近时 往 差 12 看看就知道二分出来的边界

  const nums1Index = left
  const nums2Index = totalLeft - nums1Index

  // 其实就是找 中位数
  const nums1LeftMax =
    nums1Index === 0 ? -Number.MAX_VALUE : nums1[nums1Index - 1]
  const nums1RightMin = nums1Index === m ? Number.MAX_VALUE : nums1[nums1Index]

  const nums2LeftMax =
    nums2Index === 0 ? -Number.MAX_VALUE : nums2[nums2Index - 1]
  const nums2RightMin = nums2Index === n ? Number.MAX_VALUE : nums2[nums2Index]

  if ((m + n) % 2 === 1) {
    return Math.max(nums1LeftMax, nums2LeftMax)
  } else {
    return (
      (Math.max(nums1LeftMax, nums2LeftMax) +
        Math.min(nums1RightMin, nums2RightMin)) /
      2
    )
  }
}
