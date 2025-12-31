import exist from '@jqxon/learn-utils/leetcode/exist'

export default () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCCED'

  const result = exist(board, word)

  console.log('二维网格:', board)
  console.log('搜索单词:', word)
  console.log('是否存在:', result)

  return result
}
