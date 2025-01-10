export default function numIslands(grid: string[][]): number {
  let count = 0

  const dfs = (i: number, j: number, grid: string[][]) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    )
      return

    grid[i][j] = '0'

    dfs(i + 1, j, grid)
    dfs(i - 1, j, grid)
    dfs(i, j + 1, grid)
    dfs(i, j - 1, grid)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++

        dfs(i, j, grid)
      }
    }
  }

  return count
}
