/**
 * 类似于 fromPairs，但接受两个数组
 * @param props - 属性标识符数组
 * @param values - 对应的值数组
 * @returns 返回新对象
 * @example
 * zipObject(['a', 'b'], [1, 2])
 * // => { a: 1, b: 2 }
 */
const zipObject = <K extends PropertyKey, V>(
  props: K[],
  values: V[]
): Record<K, V> => {
  const result = {} as Record<K, V>

  if (!props?.length) {
    return result
  }

  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values?.[i] as V
  }

  return result
}

export default zipObject
