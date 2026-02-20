import isDAG from '../../../../packages/learn-utils/src/leetcode/isDAG'

export default () => {
  // 有向无环图
  const dagPath: [string, string][] = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['C', 'D'],
  ]

  // 有向有环图
  const cyclePath: [string, string][] = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A'],
  ]

  const result1 = isDAG(dagPath)
  const result2 = isDAG(cyclePath)

  console.log('无环图:', dagPath, '是否为 DAG:', result1)
  console.log('有环图:', cyclePath, '是否为 DAG:', result2)

  return { dag: result1, cycle: result2 }
}
