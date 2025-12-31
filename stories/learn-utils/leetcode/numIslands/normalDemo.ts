import numIslands from '../../../../packages/learn-utils/src/leetcode/numIslands'

const normalDemo = () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]

  // 复制一份，因为函数会修改原数组
  const gridCopy = grid.map((row) => [...row])
  const result = numIslands(gridCopy)

  return {
    input: grid,
    output: result, // 1
    explanation: '只有一个岛屿（左上角连通的陆地）',
  }
}

export default normalDemo
