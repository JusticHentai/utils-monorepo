import wordBreak from '../../../../packages/learn-utils/src/leetcode/wordBreak'

const normalDemo = () => {
  const testCases = [
    { s: 'leetcode', wordDict: ['leet', 'code'], expected: true },
    { s: 'applepenapple', wordDict: ['apple', 'pen'], expected: true },
    { s: 'catsandog', wordDict: ['cats', 'dog', 'sand', 'and', 'cat'], expected: false },
  ]

  const results = testCases.map(({ s, wordDict, expected }) => ({
    s,
    wordDict,
    output: wordBreak(s, wordDict),
    expected,
  }))

  return {
    testCases: results,
    explanation: '判断字符串是否可以被字典中的单词拼接',
  }
}

export default normalDemo
