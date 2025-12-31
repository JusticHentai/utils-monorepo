import permute from '../../../../packages/learn-utils/src/leetcode/permute'

const normalDemo = () => {
  const nums = [1, 2, 3]
  const result = permute(nums)

  return {
    input: nums,
    output: result,
    count: result.length, // 6
    explanation: '3! = 6 种全排列',
  }
}

export default normalDemo
