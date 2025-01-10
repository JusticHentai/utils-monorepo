export default function wordBreak(s: string, wordDict: string[]): boolean {
  const length = s.length
  const wordSet = new Set(wordDict)
  const memo = new Array(length)

  const dfs = (start: number) => {
    // 越界 看下面前方有个 has 说明 已经通过了所有 ok
    if (start === length) {
      return true
    }

    // 以 x 为下标的值 的结果
    if (memo[start] !== undefined) return memo[start]

    for (let i = start + 1; i <= length; i++) {
      const prefix = s.slice(start, i)

      if (wordSet.has(prefix) && dfs(i)) {
        memo[start] = true

        return true
      }
    }

    memo[start] = false

    return false
  }

  return dfs(0)
}
