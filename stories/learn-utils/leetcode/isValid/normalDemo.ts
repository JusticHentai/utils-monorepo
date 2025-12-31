import isValid from '../../../../packages/learn-utils/src/leetcode/isValid'

const normalDemo = () => {
  const testCases = ['()', '()[]{}', '(]', '([)]', '{[]}']

  const results = testCases.map((s) => ({
    input: s,
    output: isValid(s),
  }))

  return {
    testCases: results,
    explanation: {
      '()': '有效',
      '()[]{}': '有效',
      '(]': '无效，括号类型不匹配',
      '([)]': '无效，括号顺序不对',
      '{[]}': '有效',
    },
  }
}

export default normalDemo
