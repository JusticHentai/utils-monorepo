import longestPalindrome from '../../../../packages/learn-utils/src/leetcode/longestPalindrome'

const normalDemo = () => {
  const testCases = ['babad', 'cbbd', 'a', 'ac']

  const results = testCases.map((s) => ({
    input: s,
    output: longestPalindrome(s),
  }))

  return {
    testCases: results,
    explanation: {
      babad: '"bab" 或 "aba" 都是有效答案',
      cbbd: '"bb" 是最长回文子串',
    },
  }
}

export default normalDemo
