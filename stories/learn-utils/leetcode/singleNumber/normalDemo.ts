import singleNumber from '../../../../packages/learn-utils/src/leetcode/singleNumber'

const normalDemo = () => {
  const testCases = [
    { nums: [2, 2, 1], expected: 1 },
    { nums: [4, 1, 2, 1, 2], expected: 4 },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: singleNumber(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: '使用异或运算，相同的数异或为 0',
  }
}

export default normalDemo
