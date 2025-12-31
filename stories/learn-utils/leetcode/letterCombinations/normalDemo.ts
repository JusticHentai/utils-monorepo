import letterCombinations from '../../../../packages/learn-utils/src/leetcode/letterCombinations'

const normalDemo = () => {
  const digits = '23'
  const result = letterCombinations(digits)

  return {
    input: digits,
    output: result,
    count: result.length, // 9 = 3 × 3
    explanation: '2 对应 abc，3 对应 def',
  }
}

export default normalDemo
