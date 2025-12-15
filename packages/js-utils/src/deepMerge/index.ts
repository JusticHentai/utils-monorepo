import isArray from '../isArray'
import isObject from '../isObject'

const deepMerge = (obj: Record<string, any>, source: Record<string, any>) => {
  if (isObject(obj) && isObject(source)) {
    for (const key in source) {
      const sourceValue = source[key]
      const objValue = obj[key]

      const mergeValue = deepMerge(objValue, sourceValue)
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

      const mergeValue = deepMerge(objValue, sourceValue)
      obj[key] = mergeValue
    }

    return obj
  }

  // 并非同时是对象或数组，优先 source，没有则 obj
  return source ? source : obj
}

export default deepMerge
