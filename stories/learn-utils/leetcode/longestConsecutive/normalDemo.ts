import longestConsecutive from '../../../../packages/learn-utils/src/leetcode/longestConsecutive'

export default () => {
  const nums = [100, 4, 200, 1, 3, 2]

  const result = longestConsecutive(nums)

  console.log('输入数组:', nums)
  console.log('最长连续序列长度:', result)
  console.log('连续序列: [1, 2, 3, 4]')

  return result
}
