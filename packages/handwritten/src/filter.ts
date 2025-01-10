export default function filter(
  arr: any[],
  cb: (...args: any[]) => boolean
): any[] {
  const res = []

  for (const [i, item] of arr.entries()) {
    if (cb(item, i, arr)) {
      res.push(item)
    }
  }

  return res
}
