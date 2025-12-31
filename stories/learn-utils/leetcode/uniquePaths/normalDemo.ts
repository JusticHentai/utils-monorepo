import uniquePaths from '../../../../packages/learn-utils/src/leetcode/uniquePaths'

const normalDemo = () => {
  const testCases = [
    { m: 3, n: 7, expected: 28 },
    { m: 3, n: 2, expected: 3 },
    { m: 7, n: 3, expected: 28 },
  ]

  const results = testCases.map(({ m, n, expected }) => ({
    m,
    n,
    output: uniquePaths(m, n),
    expected,
  }))

  return {
    testCases: results,
    explanation: '从左上角到右下角的不同路径数',
  }
}

export default normalDemo
