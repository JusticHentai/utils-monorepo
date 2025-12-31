import findDuplicate from '@jqxon/learn-utils/leetcode/findDuplicate'

export default () => {
  const nums = [1, 3, 4, 2, 2]

  const result = findDuplicate(nums)

  console.log('输入数组:', nums)
  console.log('重复的数字:', result)

  return result
}
