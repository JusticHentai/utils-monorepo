import maxArea from '../../../../packages/learn-utils/src/leetcode/maxArea'

const normalDemo = () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  const result = maxArea(height)

  return {
    input: height,
    output: result, // 49
    explanation: '选择索引 1 和 8 的柱子，面积 = min(8, 7) × 7 = 49',
  }
}

export default normalDemo
