import lengthOfLongestSubstring from '../../../../packages/learn-utils/src/leetcode/lengthOfLongestSubstring'

const normalDemo = () => {
  const testCases = [
    { input: 'abcabcbb', expected: 3 },
    { input: 'bbbbb', expected: 1 },
    { input: 'pwwkew', expected: 3 },
  ]

  const results = testCases.map(({ input, expected }) => ({
    input,
    output: lengthOfLongestSubstring(input),
    expected,
  }))

  return {
    testCases: results,
    explanation: {
      'abcabcbb': '最长子串是 "abc"，长度为 3',
      'bbbbb': '最长子串是 "b"，长度为 1',
      'pwwkew': '最长子串是 "wke"，长度为 3',
    },
  }
}

export default normalDemo
