import topKFrequent from '../../../../packages/learn-utils/src/leetcode/topKFrequent'

const normalDemo = () => {
  const testCases = [
    { nums: [1, 1, 1, 2, 2, 3], k: 2 },
    { nums: [1], k: 1 },
  ]

  const results = testCases.map(({ nums, k }) => ({
    nums,
    k,
    output: topKFrequent(nums, k),
  }))

  return {
    testCases: results,
    explanation: '返回出现频率前 k 高的元素',
  }
}

export default normalDemo
