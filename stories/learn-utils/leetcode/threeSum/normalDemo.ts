import threeSum from '../../../../packages/learn-utils/src/leetcode/threeSum'

const normalDemo = () => {
  const nums = [-1, 0, 1, 2, -1, -4]
  const result = threeSum(nums)

  return {
    input: nums,
    output: result, // [[-1, -1, 2], [-1, 0, 1]]
    explanation: '三元组和为0的组合',
  }
}

export default normalDemo
