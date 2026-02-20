import lengthOfLIS from '../../../../packages/learn-utils/src/leetcode/lengthOfLIS'

export default () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18]

  const result = lengthOfLIS(nums)

  console.log('输入数组:', nums)
  console.log('最长递增子序列长度:', result)
  console.log('例如: [2, 3, 7, 101]')

  return result
}
