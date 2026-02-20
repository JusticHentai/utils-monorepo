import { isArray, isObject } from '../_util'

export const normalizeValueToArray = (val: any): string[] => {
  let value = val
  if (!isArray(val)) {
    value = val === null || val === undefined ? [] : [val]
  }
  return value.map((x: any) => {
    if (isObject(x)) return (x as any).value
    return x
  })
}
