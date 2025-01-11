export default function permute(nums: number[]): number[][] {
  const length = nums.length
  const res: number[][] = []

  const backtrack = (current: number[], target: number[]) => {
    if (current.length === length) {
      res.push(current)
    }

    for (let i = 0; i < target.length; i++) {
      const temp = [...target]

      temp.splice(i, 1)

      backtrack(current.concat(target[i]), temp)
    }
  }

  backtrack([], nums)

  return res
}
