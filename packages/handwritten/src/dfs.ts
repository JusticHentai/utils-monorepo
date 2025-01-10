export const dfs1 = (array: any[]) => {
  const dfs = (array: any[]): number => {
    if (!Array.isArray(array)) {
      return 0
    }

    let max = 0

    for (const item of array) {
      const count = dfs(item)
      max = Math.max(max, count)
    }

    return max + 1
  }

  return dfs(array)
}

export const dfs2 = (array: number[], target: number): number[][] => {
  const res: number[][] = []

  const dfs = (list: number[], index: number, sum: number) => {
    if (sum === target) {
      res.push([...list])
      return
    }

    for (let i = index; i < array.length; i++) {
      if (sum + array[i] > target) {
        break
      }

      list.push(array[i])

      dfs(list, index + 1, sum + array[i])

      list.pop()
    }
  }

  dfs([], 0, 0)

  return res
}
