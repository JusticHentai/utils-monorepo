import longestValidParentheses from '../../../../packages/learn-utils/src/leetcode/longestValidParentheses'

export default () => {
  const testCases = [')()())', '(()']

  const results = testCases.map((s) => ({
    input: s,
    result: longestValidParentheses(s),
  }))

  console.log('最长有效括号测试:')
  results.forEach(({ input, result }) => {
    console.log(`"${input}" => ${result}`)
  })

  return results
}
