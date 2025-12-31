import search from '../../../../packages/learn-utils/src/leetcode/search'

const normalDemo = () => {
  const testCases = [
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
    { nums: [1], target: 0, expected: -1 },
  ]

  const results = testCases.map(({ nums, target, expected }) => ({
    nums,
    target,
    output: search(nums, target),
    expected,
  }))

  return {
    testCases: results,
    explanation: '在旋转排序数组中搜索目标值',
  }
}

export default normalDemo
