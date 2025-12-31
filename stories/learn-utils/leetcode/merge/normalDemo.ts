import merge from '../../../../packages/learn-utils/src/leetcode/merge'

const normalDemo = () => {
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
  const result = merge([...intervals.map(i => [...i])])

  return {
    input: intervals,
    output: result, // [[1,6],[8,10],[15,18]]
    explanation: '区间 [1,3] 和 [2,6] 重叠，合并为 [1,6]',
  }
}

export default normalDemo
