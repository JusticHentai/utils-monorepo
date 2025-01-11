export default function subsets(nums: number[]): number[][] {
  const res: number[][] = []

  const dfs = (index: number, list: number[]) => {
    if (index === nums.length) {
      res.push(list.slice())

      return
    }

    list.push(nums[index])
    dfs(index + 1, list)

    list.pop()
    dfs(index + 1, list)
  }

  dfs(0, [])
  return res
}
