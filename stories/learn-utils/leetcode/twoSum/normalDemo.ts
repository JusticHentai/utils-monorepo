import twoSum from '../../../../packages/learn-utils/src/leetcode/twoSum'

const normalDemo = () => {
  const nums = [2, 7, 11, 15]
  const target = 9

  const result = twoSum(nums, target)

  return {
    input: { nums, target },
    output: result, // [0, 1]
    explanation: 'nums[0] + nums[1] = 2 + 7 = 9',
  }
}

export default normalDemo
