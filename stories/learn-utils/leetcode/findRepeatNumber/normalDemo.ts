import findRepeatNumber from '@jqxon/learn-utils/leetcode/findRepeatNumber'

export default () => {
  const nums = [2, 3, 1, 0, 2, 5, 3]

  const result = findRepeatNumber(nums)

  console.log('输入数组:', nums)
  console.log('重复的数字:', result)

  return result
}
