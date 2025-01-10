export default function (candidates: number[], target: number): number[][] {
  const ans: number[][] = []

  const dfs = (target: number, combine: number[], index: number) => {
    if (index === candidates.length) {
      return
    }

    if (target === 0) {
      ans.push(combine)

      return
    }

    // 下一个
    dfs(target, combine, index + 1)

    // 选择当前数
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combine, candidates[index]], index)
    }
  }

  dfs(target, [], 0)

  return ans
}
