import canJump from '../../../../packages/learn-utils/src/leetcode/canJump'

const normalDemo = () => {
  const testCases = [
    { nums: [2, 3, 1, 1, 4], expected: true },
    { nums: [3, 2, 1, 0, 4], expected: false },
  ]

  const results = testCases.map(({ nums, expected }) => ({
    nums,
    output: canJump(nums),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      case1: '可以先跳 1 步到索引 1，然后跳 3 步到达最后',
      case2: '无论怎样都会到达索引 3，但该位置最大跳跃长度是 0',
    },
  }
}

export default normalDemo
