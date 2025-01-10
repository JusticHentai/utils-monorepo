export default function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  const used = Array.from(new Array(m), () => new Array(n).fill(false))

  const dfs = (row: number, col: number, i: number) => {
    // 目标
    if (i === word.length) {
      return true
    }

    // 枝剪 越界
    if (row < 0 || row >= m || col < 0 || col >= n) {
      return false
    }

    // 枝剪 访问过了 或者不是目标字符
    if (used[row][col] || board[row][col] !== word[i]) {
      return false
    }

    // 选择

    used[row][col] = true

    const canFindRest =
      dfs(row + 1, col, i + 1) ||
      dfs(row - 1, col, i + 1) ||
      dfs(row, col + 1, i + 1) ||
      dfs(row, col - 1, i + 1)

    // 目标
    if (canFindRest) {
      return true
    }

    // 处理后市
    used[row][col] = false

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}
