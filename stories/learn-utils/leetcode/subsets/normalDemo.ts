import subsets from '../../../../packages/learn-utils/src/leetcode/subsets'

const normalDemo = () => {
  const nums = [1, 2, 3]
  const result = subsets(nums)

  return {
    input: nums,
    output: result,
    count: result.length, // 8 = 2^3
    explanation: '包括空集和自身的所有子集',
  }
}

export default normalDemo
