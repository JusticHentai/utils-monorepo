import nextPermutation from '@jqxon/learn-utils/leetcode/nextPermutation'

export default () => {
  const nums = [1, 2, 3]

  console.log('原数组:', [...nums])
  nextPermutation(nums)
  console.log('下一个排列:', nums)

  return nums
}
