export default function generateParenthesis(n: number): string[] {
  const res: string[] = []

  const dfs = (lRemain: number, rRemain: number, str: string) => {
    if (str.length === 2 * n) {
      res.push(str)

      return
    }

    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + '(')
    }

    if (lRemain < rRemain) {
      dfs(lRemain, rRemain - 1, str + ')')
    }
  }

  dfs(n, n, '')

  return res
}
