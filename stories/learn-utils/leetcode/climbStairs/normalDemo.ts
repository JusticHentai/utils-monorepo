import climbStairs from '../../../../packages/learn-utils/src/leetcode/climbStairs'

const normalDemo = () => {
  const testCases = [2, 3, 4, 5, 10]

  const results = testCases.map((n) => ({
    input: n,
    output: climbStairs(n),
  }))

  return {
    testCases: results,
    explanation: {
      2: '两种方法：1+1 或 2',
      3: '三种方法：1+1+1、1+2、2+1',
    },
  }
}

export default normalDemo
