export default function map(arr: any[], cb: (...args: any[]) => any) {
  const res = []

  for (const [i, item] of arr.entries()) {
    res.push(cb(item, i, arr))
  }

  return res
}
