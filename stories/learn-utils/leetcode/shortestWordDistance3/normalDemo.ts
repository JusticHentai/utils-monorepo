import { shortestWordDistance } from '../../../../packages/learn-utils/src/leetcode/shortestWordDistance3'

export default () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']
  const word1 = 'makes'
  const word2 = 'makes'

  const result = shortestWordDistance(wordsDict, word1, word2)

  console.log('单词数组:', wordsDict)
  console.log('word1:', word1)
  console.log('word2:', word2)
  console.log('最短距离 (word1 可能等于 word2):', result)

  return result
}
