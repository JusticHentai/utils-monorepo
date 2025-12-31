import minDistance from '@jqxon/learn-utils/leetcode/minDistance'

export default () => {
  const word1 = 'horse'
  const word2 = 'ros'

  const result = minDistance(word1, word2)

  console.log('word1:', word1)
  console.log('word2:', word2)
  console.log('编辑距离:', result)
  console.log('操作: horse -> rorse -> rose -> ros')

  return result
}
