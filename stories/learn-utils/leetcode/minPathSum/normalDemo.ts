import minPathSum from '@jqxon/learn-utils/leetcode/minPathSum'

export default () => {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]

  const result = minPathSum(grid)

  console.log('网格:', grid)
  console.log('最小路径和:', result)
  console.log('路径: 1→3→1→1→1')

  return result
}
