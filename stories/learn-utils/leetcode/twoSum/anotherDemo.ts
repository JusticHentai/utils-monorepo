import twoSum from '../../../../packages/learn-utils/src/leetcode/twoSum'

const anotherDemo = () => {
  const nums = [3, 2, 4]
  const target = 6

  const result = twoSum(nums, target)

  return {
    input: { nums, target },
    output: result, // [1, 2]
    explanation: 'nums[1] + nums[2] = 2 + 4 = 6',
  }
}

export default anotherDemo
