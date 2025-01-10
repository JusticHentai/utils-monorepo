export default function merge(intervals: number[][]): number[][] {
  const res = []
  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]

    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1])
    } else {
      res.push(prev)
      prev = cur
    }
  }

  res.push(prev)

  return res
}
