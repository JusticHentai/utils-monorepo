import findKthLargest from '../../../../packages/learn-utils/src/leetcode/findKthLargest'

const normalDemo = () => {
  const testCases = [
    { nums: [3, 2, 1, 5, 6, 4], k: 2, expected: 5 },
    { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, expected: 4 },
  ]

  const results = testCases.map(({ nums, k, expected }) => ({
    nums: [...nums],
    k,
    output: findKthLargest([...nums], k),
    expected,
  }))

  return {
    testCases: results,
    explanation: '找到数组中第 k 大的元素',
  }
}

export default normalDemo
