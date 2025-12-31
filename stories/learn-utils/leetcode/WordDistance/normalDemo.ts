import { WordDistance } from '@jqxon/learn-utils/leetcode/WordDistance'

export default () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']

  const wordDistance = new WordDistance(wordsDict)

  const results = [
    {
      word1: 'coding',
      word2: 'practice',
      result: wordDistance.shortest('coding', 'practice'),
    },
    {
      word1: 'makes',
      word2: 'coding',
      result: wordDistance.shortest('makes', 'coding'),
    },
  ]

  console.log('单词数组:', wordsDict)
  results.forEach(({ word1, word2, result }) => {
    console.log(`"${word1}" 和 "${word2}" 的最短距离:`, result)
  })

  return results
}
