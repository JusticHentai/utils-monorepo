import majorityElement from '../../../../packages/learn-utils/src/leetcode/majorityElement'

const normalDemo = () => {
  const testCases = [
    { nums: [3, 2, 3], expected: 3 },
    { nums: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: majorityElement(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: '出现次数超过 n/2 的元素',
  }
}

export default normalDemo
