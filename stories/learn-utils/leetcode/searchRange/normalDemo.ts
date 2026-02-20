import searchRange from '../../../../packages/learn-utils/src/leetcode/searchRange'

export default () => {
  const nums = [5, 7, 7, 8, 8, 10]
  const target = 8

  const result = searchRange(nums, target)

  console.log('数组:', nums)
  console.log('目标值:', target)
  console.log('目标范围:', result)

  return result
}
