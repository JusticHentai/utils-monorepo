import isArray from '@/is/isArray'
import isObject from '@/is/isObject'

const merge = (obj: Record<string, any>, source: Record<string, any>) => {
  if (isObject(obj) && isObject(source)) {
    for (const key in source) {
      const sourceValue = source[key]
      const objValue = obj[key]

      const mergeValue = merge(objValue, sourceValue)
      Object.assign(obj, {
        [key]: mergeValue,
      })
    }

    return obj
  }

  if (isArray(obj) && isArray(source)) {
    for (const key in source) {
      const sourceValue = source[key]
      const objValue = obj[key]

      const mergeValue = merge(objValue, sourceValue)
      obj[key] = mergeValue
    }

    return obj
  }

  // 并非同时是对象或数组，优先 source，没有则 obj
  return source ? source : obj
}

export default merge
