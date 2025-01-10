export const hash1 = (array: number[]) => {
  let min = Infinity
  let max = -Infinity

  for (const item of array) {
    min = Math.min(min, item)
    max = Math.max(max, item)
  }

  return max - min
}

export const hash2 = (array: any[]) => {
  const res = []
  const hash = new Map<any, number>()

  for (const item of array) {
    const jsonStr = JSON.stringify(item)

    if (hash.has(jsonStr)) {
      continue
    }

    hash.set(jsonStr, 1)

    res.push(item)
  }

  return res
}
