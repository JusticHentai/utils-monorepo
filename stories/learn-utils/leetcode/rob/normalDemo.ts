import rob from '../../../../packages/learn-utils/src/leetcode/rob'

const normalDemo = () => {
  const testCases = [
    { nums: [1, 2, 3, 1], expected: 4 },
    { nums: [2, 7, 9, 3, 1], expected: 12 },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: rob(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      case1: '偷窃 1 号房屋和 3 号房屋，金额 = 1 + 3 = 4',
      case2: '偷窃 1、3、5 号房屋，金额 = 2 + 9 + 1 = 12',
    },
  }
}

export default normalDemo
