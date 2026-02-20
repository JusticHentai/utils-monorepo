import findMedianSortedArrays from '../../../../packages/learn-utils/src/leetcode/findMedianSortedArrays'

export default () => {
  const nums1 = [1, 3]
  const nums2 = [2]

  const result = findMedianSortedArrays(nums1, nums2)

  console.log('数组1:', nums1)
  console.log('数组2:', nums2)
  console.log('中位数:', result)

  return result
}
