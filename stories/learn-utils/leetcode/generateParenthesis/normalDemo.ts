import generateParenthesis from '../../../../packages/learn-utils/src/leetcode/generateParenthesis'

const normalDemo = () => {
  const n = 3
  const result = generateParenthesis(n)

  return {
    input: n,
    output: result,
    count: result.length, // 5
    explanation: '3 对括号的所有有效组合',
  }
}

export default normalDemo
