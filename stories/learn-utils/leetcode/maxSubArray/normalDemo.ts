import maxSubArray from '../../../../packages/learn-utils/src/leetcode/maxSubArray'

const normalDemo = () => {
  const testCases = [
    { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
    { input: [1], expected: 1 },
    { input: [5, 4, -1, 7, 8], expected: 23 },
  ]

  const results = testCases.map(({ input, expected }) => ({
    input,
    output: maxSubArray(input),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      '[-2,1,-3,4,-1,2,1,-5,4]': '连续子数组 [4,-1,2,1] 的和最大，为 6',
    },
  }
}

export default normalDemo
