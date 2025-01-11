export default function reduce(
  arr: any[],
  cb: (...args: any[]) => any,
  initValue?: any
) {
  const hasInitValue = initValue === 0 ? !initValue : !!initValue

  let res = hasInitValue ? initValue : arr[0]

  for (let i = hasInitValue ? 0 : 1; i < arr.length; i++) {
    res = cb(res, arr[i], i, arr)
  }

  return res
}
