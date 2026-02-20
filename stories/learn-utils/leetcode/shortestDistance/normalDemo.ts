import { shortestDistance } from '../../../../packages/learn-utils/src/leetcode/shortestDistance'

export default () => {
  const wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes']
  const word1 = 'coding'
  const word2 = 'practice'

  const result = shortestDistance(wordsDict, word1, word2)

  console.log('单词数组:', wordsDict)
  console.log('word1:', word1)
  console.log('word2:', word2)
  console.log('最短距离:', result)

  return result
}
